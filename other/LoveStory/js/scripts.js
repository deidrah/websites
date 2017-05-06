$( function() {
    $( "#sex-self" ).selectmenu();
 
    $( "#sex-other" ).selectmenu();
 
    $( "#number-from" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#number-to" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
  });