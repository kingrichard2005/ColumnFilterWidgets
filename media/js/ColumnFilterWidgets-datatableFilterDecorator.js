$(document).ready( function () {
   // Load the demo (raget)table
   $('#example').dataTable( {
      "sDom": 'W<"clear">lfrtip'
   } );
   
   // Decorate filter table containers as
   // jQuery UI Dialogs
   $('div[id$="_filterDialog"]').dialog({
      autoOpen: false,
      width   : 400,
      hide    : "blind",
      height  : window.innerHeight / 4,
      open    : function( event, ui ) {
         // Click-handler for all checkbox elements in this column
         $('#' + this.id + ' input[class*="_filterCheckbox"]').click(function(){
            if( $(this).prop('checked') ) {
               console.log('processs selection');
               // Filter based on this selection value
               var sSelected = $(this).closest('tr').children().last().text().trim();
               if ( sSelected === '' ) {
                  // The blank option is a default, not a filter, and is re-selected after filtering
                  return;
               }
               // TODO
            }
            else {
               console.log('processs un-selection');
            }
         });
      },
   });

   // Decorate filter toggle anchors as
   // jQuery UI Buttons
   $('a[id$="filterButton"]').button().click( function( event ){
      event.preventDefault();
      // Close any open filter dialog(s)
      $('div[id$="_filterDialog"]').dialog( "close" );
      
      // Position this filter dialog to the bottom-right of the filter button
      $('div[id="' + this.id.replace('_filterButton', '_filterDialog') + '"]').dialog( 'option', 'position', { my: 'top', at: 'right bottom', of: $(this)} );
      
      // Open this filter dialog
      $('div[id="' + this.id.replace('_filterButton', '_filterDialog') + '"]').dialog( 'open' );
   });
} );