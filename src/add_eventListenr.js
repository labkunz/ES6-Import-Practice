function get_element_and_add_eventListener(id_target, show_context) {
    let element = document.querySelector(`#${id_target}`);
    if (element == null) {
        setTimeout(function() {get_element_and_add_eventListener(id_target)}, 1000);
    } else {
        element.addEventListener("click", function(e) {
            alert(show_context);
        });
    }
}

export default {
    func: get_element_and_add_eventListener,
    name: "world"
}