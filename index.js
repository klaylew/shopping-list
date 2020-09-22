//enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
function addItem() {
  
  $("#js-shopping-list-form").submit(event => {
   event.preventDefault(event);
   
  $(".shopping-list").prepend(`
    <li>
        <span class="shopping-item">test</span>
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

  })
 }


//check and uncheck items on the list by clicking the "Check" button
function checkOffItem() {
  $(".shopping-item-toggle").click(function(event) {
    $(event.currentTarget).closest('.shopping-item').toggleClass('.shopping-item__checked');
  })  
}


//permanently remove items from the list
function deleteItem() {

}


$(addItem);
$(checkOffItem);