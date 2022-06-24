/**Get input values when submitting the form */
$('#newMovie').on('submit', function(event) {
    event.preventDefault();
    let title = $('#title').val();
    let rating = $('#rating').val();

    let movieData = {title, rating};
    const dataAppendDom = createMovieData(movieData);

    $('#movieTableBody').append(dataAppendDom);
    $('#newMovie').trigger('reset');
    
});
    
/**Get values for movie and rating to append to DOM */    
function createMovieData(data) {
    return ` 
        <tr>
          <td>${data.title}</td>
          <td>${data.rating}</td>
          <td>
            <button type="button" class="deleteBtn">
            Delete
            </button>
          </td>
        <tr>    
    `;      
};

/**Delete movie and rating from the DOM */
$('#movieTableBody').on('click', '.deleteBtn', function(event) {
    const items = event.target

    if(items.classList[0] === 'deleteBtn') {
        const deleteItems = items.parentElement.parentElement
        deleteItems.remove();
    }

    
});

