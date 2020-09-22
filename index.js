//enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
function addItem() {
  
  $("#js-shopping-list-form").submit(event => {
   event.preventDefault(event);
   const itemName = $(event.currentTarget).find('#shopping-list-entry');
   
  $(".shopping-list").prepend(`
      <li>
        <span class="shopping-item">${itemName.val()}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
      `) 
      itemName.val("");

  })
 }


//check and uncheck items on the list by clicking the "Check" button
function checkOffItem() {
  /*
    code that worked for functionaility on existing items:
    $(".shopping-item-toggle").on('click', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  })
  */
  //function that works on dynamically coded objects by listening to the parent element "ul"
  $('ul').on('click', 'li .shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  })
}
  
//permanently remove items from the list
function deleteItem() {
  $('ul').on('click', 'li .shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  })
}


$(addItem);
$(checkOffItem);
$(deleteItem);