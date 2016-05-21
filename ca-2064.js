$(function() {

  $('#mainTabNav a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

 //Show Summary Feedback
    $('#summary-feedback2').on('click',function(){
      console.debug('click');
      $('.summary-feedback-panel').css('display','block');
    });

  //This replaces the drop-down selection to
  //show what was selected
  $('.dropdown a').on('click',function(e){
    e.preventDefault();
    var thisItem = $(this).text();
    $(this).parent().parent().siblings('button').html(thisItem+' <span class="caret"></span>');
  });

  //nav-elements
  $('.elements').on('click',function(e){
    e.preventDefault();
    $('.elements-menu').css('display','none');
    $('#elements-dialog').dialog({
          width: 850,
          height: 400,
          close:function(){
            console.debug('testing');
            $('.elements-menu').css('display','block');
          }
      });
  });

  //.dropdown-menu-general a
  $('.nav-container .dropdown-menu-general a.section').on('click',function(e){
    e.preventDefault(e);
    $('.content').css('display', 'none');
  });

  //nav-new
  $('#nav-new').on('click',function(e){
    window.open('menu-02.html','_newtab');
  });

  //nav-filename1
  $('.nav-filename1').on('click',function(e){
    $('.content').css('display', 'none');
    $('#filename1').css('display', 'block');
  });

  //nav-ilename2
  $('.nav-filename2').on('click',function(e){
    $('.content').css('display', 'none');
    $('#filename2').css('display', 'block');
  });

  //nav-filename3
  $('.nav-filename3').on('click',function(e){
    $('.content').css('display', 'none');
    $('#filename3').css('display', 'block');
  });

  //nav-filename4
  $('.nav-filename4').on('click',function(e){
    $('.content').css('display', 'none');
    $('#filename4').css('display', 'block');
  });


  //nav-scoring
  $('#nav-scoring').on('click',function(e){
    $('.content').css('display','none');
    $('#scoring .content').css('display', 'block');
  });

  //nav-feedback
  $('#nav-feedback').on('click',function(e){
    // $('#summary-feedback').css('display','block');
    $('.content').css('display','none');
    $('#summary-feedback .content').css('display', 'block');
    
          $('.collapse').collapse('show');
          $('.summary-feedback-panel').css('display','block');
       
     //Checkbox show hide summary feedback
    $('.summary-feedback-form :checkbox').on('click',function(){
        if($(this).is(':checked')){
          $('.summary-feedback-panel').css('display','block');
          $('.collapse').collapse('show');
        } else {
          $('.summary-feedback-panel').css('display','none');
        }
    });

  });

  
  //file rename modal
  $('#btn-add-supporting-materials').on('click',function(){
   $('#addSupportingMaterial').modal('toggle');
  });

  //file rename modal
  $('.title-nav').on('click',function(){
   $('#renameQuestion').modal('toggle');
   $('#renameQuestion #itemName span').html($(this).text());
  });

  //save file rename
  $('#renameQuestion #save').on('click',function(){
    console.debug($('#renameQuestion #itemName span').val());
    $('#renameQuestion').modal('hide');
    $('.title-nav').text($('#renameQuestion #itemName span').text());
  });

  //open file
  $('#nav-open').on('click',function(){
   $('#openFileModal').modal('toggle');
  });

  //copy file
  $('#nav-copy').on('click',function(){
   $('#copyFileModal').modal('toggle');
  });

  //delete file
  $('#nav-delete').on('click',function(){
   $('#deleteFileModal').modal('toggle');
  });

  //archive file
  $('#nav-archive').on('click',function(){
   $('#archiveFileModal').modal('toggle');
  });

  $('#btn-scoring').click(function(e){
    $('#scoringModal').modal('toggle');
    $('#editPreview').closeMbExtruder();
  });

  

  //help dialog
  $('.help').on('click',function(e){
    e.preventDefault();
    $('#dialog').dialog();
  });
  
  //summary feedback preview panel
  $("#summaryFeedbackPreview").buildMbExtruder({
      position:"right",
      width: 800,
      top: 0,
      extruderOpacity:.8,
      onExtOpen:function(){},
      onExtContentLoad:function(){},
      onExtClose:function(){}
  });
  //scoring preview panel
  $("#scoringPreview").buildMbExtruder({
      position:"right",
      width: 800,
      top: 0,
      extruderOpacity:.8,
      onExtOpen:function(){},
      onExtContentLoad:function(){},
      onExtClose:function(){}
  });

  //edit preview panel
  $("#editPreview").buildMbExtruder({
      position:"right",
      width: 660,
      top: 0,
      extruderOpacity:.8,
      closeOnExternalClick: false,
      onExtOpen:function(){},
      onExtContentLoad:function(){},
      onExtClose:function(){}
  });

  $("#filename1Preview").buildMbExtruder({
      position:"right",
      width: 800,
      top: 0,
      extruderOpacity:.8,
      onExtOpen:function(){},
      onExtContentLoad:function(){},
      onExtClose:function(){}
  });

  $("#filename2Preview").buildMbExtruder({
      position:"right",
      width: 800,
      top: 0,
      extruderOpacity:.8,
      onExtOpen:function(){},
      onExtContentLoad:function(){},
      onExtClose:function(){}
  });
  
  //profile preview panel
  $("#profilePreview").buildMbExtruder({
      position:"right",
      width:800,
      top: 0,
      extruderOpacity:.8,
      closeOnExternalClick: false,
      onExtOpen:function(){},
      onExtContentLoad:function(){},
      onExtClose:function(){}
  });
  $('#btnPreviewProfile').click(function(e){
    $(this).toggleClass('active');
    $(this).toggleClass('btn-warning');
    if($(this).hasClass('active')){
      $('#profilePreview').openMbExtruder();
      $(this).html('Close Preview  <i class="fa fa-toggle-right"></i>');  
    } else {
      $('#profilePreview').closeMbExtruder();
      $(this).html('Preview Profile Information  <i class="fa fa-toggle-left"></i>');
    }
  });
  $('#showEditPreview').click(function(e){
    $(this).toggleClass('active');
    $(this).toggleClass('btn-warning');
    if($(this).hasClass('active')){
      $('#editPreview').openMbExtruder();
      $(this).html('Close Preview  <i class="fa fa-toggle-right"></i>');
    } else {
      $('#editPreview').closeMbExtruder();
      $(this).html('Preview  <i class="fa fa-toggle-left"></i>');
    }
    
  });

  $('#closeEditPreview').on('click',function(e){
    $('#editPreview').closeMbExtruder();
  });

  $('.editable').each(function(){
    this.contentEditable = true;
  });

});