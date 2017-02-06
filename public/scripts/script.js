// external js: masonry.pkgd.js

var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

$grid.on( 'click', '.grid-item-content', function() {

  if($(".is-expanded").length > 0 
     && !this.parentElement.classList.contains("is-expanded")){ 
    resetSize(); 
  }
  toggle(this.parentElement); //grid-item
  // this.children[2].classList.toggle("show");
  $grid.masonry();
});

function resetSize(){
  Array.from($(".is-expanded")).forEach(function(item){
    toggle(item);
  });
}

function toggle(obj){
  $( obj ).toggleClass('is-expanded');
  //Not expanded Bootstrap classes
  $( obj ).toggleClass('col-sm-6');
  $( obj ).toggleClass('col-md-4');

  //Expanded Bootstrap classes
  $( obj ).toggleClass('col-sm-12');
  $( obj ).toggleClass('col-md-8');
}






