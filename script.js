// Function to add a comment dynamically
function addComment(postId) {
    const commentInput = document.getElementById(`comment-input-${postId}`);
    const commentText = commentInput.value.trim();

    if (commentText !== "") {
        const commentsList = document.getElementById(`comments-post-${postId}`);
        const newComment = document.createElement("li");
        newComment.textContent = commentText;
        commentsList.appendChild(newComment);

        // Clear the comment input
        commentInput.value = "";
    }
}
