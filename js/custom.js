// CSS3 FILTERS
$(function() {

	// GET INPUT ELEMENTS
	var elInput = $('#form input');
	
	// FOR EACH INPUT ELEMENT
	elInput.each(function() {
	
		// ATTACH THE CHANGE ACTION
		elInput.on('change', function() {
			var blur = document.getElementById('blur').value,
				elBlurVal = blur;
				
			var brightness = document.getElementById('brightness').value,
				elBrightnessVal = brightness;	
				
			var contrast = document.getElementById('contrast').value,
				elContrastVal = contrast;
				
			var hue = document.getElementById('hue').value,
				elHueVal = hue;
				
			var invert = document.getElementById('invert').value,
				elInvertVal = invert;	
				
			var saturate = document.getElementById('saturate').value,
				elSaturateVal = saturate;
				
			var sepia = document.getElementById('sepia').value,
				elSepiaVal = sepia;
			
			// SET THE FILTERS STYLE VALUES
			var filters = 'blur(' + elBlurVal + 'px) saturate(' + elSaturateVal + ') hue-rotate(' + elHueVal + 'deg) brightness(' + elBrightnessVal + ') contrast(' + elContrastVal + ') invert(' + elInvertVal + ') sepia(' + elSepiaVal + ')';
			
			// SET THE FILTERS IMG
			var elImg = $('#el-img');
				elImg.css('-webkit-filter', filters);
			
			// SET THE FILTERS VID	
				var elVid = $('#el-video');
				elVid.css('-webkit-filter', filters);
		});
	});
	
})