    function getSelectedText(){
        let result = { status : true };
        let active_element = document.activeElement;
        try {
            if(['INPUT', 'TEXTAREA'].include(active_element.tagName)){
                result.result = active_element.value;
            }
            else if('getSelection' in window){
                result.result = window.getSelection().toString();
            }else if('selection' in document && document.selection.type != "Control"){
                result.result = document.selection.createRange().text;
            }else{
                throw Error('No se encontro elemento seleccionado');
            }
        } catch (e) {
            result.status = false;
            result.error = e;
        }

        return result;
    }
