/**
* Create a filter dialog for target table column.
* 
* @param  {object} oSettings - The target table's settings.
* @param  {number} i         - numeric index of the target table column.
* @return {object} A datatable object populated with unique values from the target table column
*/
function createColumnFilterTableWidget( oDataTableSettings, i) {
   var oTargetTable          = $('#' + oDataTableSettings.sTableId).dataTable();
   var oFilterTableContainer = $( '<div>', {id: "col_" + i +"_filterDialog", cellpadding: 0, border: 0} );
   var oFilterTable          = $( '<table>', {id: "col_" + i +"_filterTable", cellpadding: 0, border: 0, targetTableId: oDataTableSettings.sTableId} );
   // Add the div object to the body object of the DOM
   $('body').append(oFilterTableContainer);

   // Get distinct values from the target table column
   var aaData            = [];
   for( var j = 0; j < oTargetTable._('tr').length; ++j) {
      if ( aaData.indexOf( oTargetTable._('tr')[j][i] ) === -1 ){
         aaData.push( oTargetTable._('tr')[j][i] );
      }
   }
   
   // Add checkbox cell element to each row
   for( var j = 0; j < aaData.length; ++j) {
      aaData[j] = [ '<input type="checkbox" class="col_' + i +'_filterCheckbox" />', aaData[j] ];
   }
   
   // Add the table element to the container
   $(oFilterTableContainer).html(oFilterTable);
   
   // Instantiate the filter (data) table instance
   oFilterTable = $('#col_' + i + '_filterTable').dataTable( {
     "aaData": aaData,
     "aoColumns": [
         { "sTitle": "" },
         { "sTitle": oDataTableSettings.aoColumns[i].sTitle }
     ]
   } );
   
   console.log('created filter table object: ' + oFilterTable);
   return;
}