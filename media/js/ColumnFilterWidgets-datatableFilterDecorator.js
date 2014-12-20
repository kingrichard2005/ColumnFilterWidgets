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
               // Filter based on this selection value
               var sSelected = $(this).closest('tr').children().last().text().trim();
               if ( sSelected === '' ) {
                  // The blank option is a default, not a filter, and is re-selected after filtering
                  return;
               }
               else{
                  /* TODO: update this options parent filter table
                     1) Select/Highlight this option in the filter datatable
                     
                     2) Collect all selected options from this filter table column
                     
                     3) Apply filter to target table
                     
                     4) Update other column filters to reflect options in filtered view of target table
                  */
               }
            }
            else {
               // console.log('processs un-selection');
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
   
   // Add handler to decorate filter table rows
   // on de/select
   $('table[id*="_filterTable"] tbody tr').click( function( e ) {
      var oTable		= $(this).closest('table').dataTable()
      if ( $(this).hasClass('row_selected') ) {
         $(this).removeClass('row_selected');
      }
      else {
         oTable.$('tr.row_selected').removeClass('row_selected');
         $(this).addClass('row_selected');
      }
    });
   
} );