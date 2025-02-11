#!/bin/bash

# Script to copy files from nb drafts to site code, then commit and push

# --- Check environment variables ---
if [ -z "$SITE_GIT_REPO_DIR" ]; then
  echo "ERROR: SITE_GIT_REPO_DIR is not set."
  exit 1
fi
if [ -z "$NB_FINAL_DRAFT_DIR" ]; then
  echo "ERROR: NB_FINAL_DRAFT_DIR is not set."
  exit 1
fi

if [ -z "$NB_FINAL_DRAFT_IMAGES_DIR" ]; then
  echo "ERROR: NB_FINAL_DRAFT_IMAGES_DIR is not set."
  exit 1
fi

if [ -z "$SITE_CODE_MD_DIR" ]; then
  echo "ERROR: SITE_CODE_MD_DIR is not set."
  exit 1
fi

if [ -z "$SITE_CODE_MD_IMAGES_DIR" ]; then
  echo "ERROR: SITE_CODE_MD_IMAGES_DIR is not set."
  exit 1
fi

# --- Copy files ---

# Copy markdown files
echo "Copying files from $NB_FINAL_DRAFT_DIR to $SITE_CODE_MD_DIR..."
cp -r "$NB_FINAL_DRAFT_DIR"/* "$SITE_CODE_MD_DIR"/

# Check if the copy command was successful.
if [ $? -ne 0 ]; then
  echo "ERROR: Failed to copy files from $NB_FINAL_DRAFT_DIR to $SITE_CODE_MD_DIR."
  exit 1
fi

# Copy image files
echo "Copying files from $NB_FINAL_DRAFT_IMAGES_DIR to $SITE_CODE_MD_IMAGES_DIR..."
cp -r "$NB_FINAL_DRAFT_IMAGES_DIR"/* "$SITE_CODE_MD_IMAGES_DIR"/

# Check if the copy command was successful.
if [ $? -ne 0 ]; then
  echo "ERROR: Failed to copy files from $NB_FINAL_DRAFT_IMAGES_DIR to $SITE_CODE_MD_IMAGES_DIR."
  exit 1
fi

# --- Git Commit and Push ---

# Navigate to the Git repository directory
cd "$SITE_GIT_REPO_DIR"

# Check if it's a git repository
if [ ! -d ".git" ]; then
  echo "ERROR: $SITE_GIT_REPO_DIR is not a git repository."
  exit 1
fi

# Add the changed files (only the md and images directories)
echo "Adding files to git..."
git add "$SITE_CODE_MD_DIR" "$SITE_CODE_MD_IMAGES_DIR"

# Check if there are any changes to commit
if ! git diff --cached --quiet --exit-code; then
  echo "Committing changes to git..."
  git commit -m "Update markdown content from nb drafts"

  # Push the changes to the remote repository
  echo "Pushing changes to remote origin..."
  git push origin master

  # Check if the push command was successful.
  if [ $? -ne 0 ]; then
    echo "ERROR: Failed to push changes to remote origin."
    exit 1
  fi

  echo "Successfully updated remote repository."
else
  echo "No changes to commit."
fi

echo "Script completed."
exit 0
