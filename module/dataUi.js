const bookList = document.getElementById('container-list');

const bookUi = (book) => {
  bookList.innerHTML += `
                      <div class="list">
                        <div class="div-text">
                        <p>${book.title}</p>
                          <p>by</p>
                          <p>${book.author}</p>
                        </div>
                        <button class="remove" id="remove" type="button">Remove</button>
                    </div>`;
};

export default bookUi;