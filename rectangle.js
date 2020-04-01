var $width = $('#width'),
    $height = $('#height'),
    $btnCal = $('#calculate'),
    $perimeter = $('#perimeter'),
    $area = $('#area');
$btnCal.click (function(){
  //if error return;
  if(!validate('#width')||!validate('#height')) return;

  var w = Number($width.val()),
      h = Number($height.val());
  var p = 2 * (w + h),
      a = w * h;
  $perimeter.val(p);
  $area.val(a);
})
function validate(field){
  //Null
  var $data=$(field),
      $msg = $(field + '-valid');
  if($data.val()===''){
    $msg.html('不能为空');
    $data.select();
    return false
  }
  //number
  
  if(!/^-?(0|[1-9]\d*)?([eE][+=]?\d+)?$/.test($data.val())){
    $msg.html('必须是数值');
    $data.select();
    return false
  }
  //error message
    //return false

  return true
}
