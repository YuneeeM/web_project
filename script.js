const postForm = document.getElementById('postForm');
const authorInput = document.getElementById('authorInput');
const contentInput = document.getElementById('contentInput');
const postList = document.getElementById('postList');

postForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const author = authorInput.value;
  const content = contentInput.value;

  if (author.trim() === '' || content.trim() === '') {
    alert('이름과 내용을 모두 입력해주세요.');
    return;
  }

  const post = document.createElement('div');
  post.className = 'post';
  post.innerHTML = `<strong>${author}</strong>: ${content}`;
  postList.appendChild(post);

  authorInput.value = '';
  contentInput.value = '';
});
