/* Javascript for gencourseai_xblock. */
function gencourseai_xblock(runtime, element) {

    function updateCount(result) {
        $('.count', element).text(result.count);
    }

    var handlerUrl = runtime.handlerUrl(element, 'increment_count');

    $('p', element).click(function(eventObject) {
        $.ajax({
            type: "POST",
            url: handlerUrl,
            data: JSON.stringify({"hello": "world"}),
            success: updateCount
        });
    });

    $(function ($) {
        /*
        Use `gettext` provided by django-statici18n for static translations

        var gettext = gencourseai_xblocki18n.gettext;
        */

        /* Here's where you'd do things on page load. */

        // dummy_text is to have at least one string to translate in JS files. If you remove this line,
        // and you don't have any other string to translate in JS files; then you must remove the (--merge-po-files)
        // option from the "extract_translations" command in the Makefile
        const dummy_text = gettext("Hello World");
    });
}
