var urlParams = (function () {
    var result = new Object();
    var params = window.location.search.slice(1).split('&');

    for (var i = 0; i < params.length; i++) {
        idx = params[i].indexOf('=');

        if (idx > 0) {
            result[params[i].substring(0, idx)] = params[i].substring(idx + 1);
        }
    }

    return result;
})();

window.isIframe = '1' == urlParams['isIframe'];

// Forces CDN caches by passing URL parameters via URL hash
if (window.location.hash != null && window.location.hash.substring(0, 2) == '#P') {
    try {
        urlParams = JSON.parse(decodeURIComponent(window.location.hash.substring(2)));

        if (urlParams.hash != null) {
            window.location.hash = urlParams.hash;
        }
    }
    catch (e) {
        // ignore
    }
}
///////////////////////////// 以上是原script中的urlParams导出
var project_id;
var diagram_id;
var diagram_name;
var diagram_content;
console.log(urlParams['diagram_token'])
function parse_token() {
    $.ajax({
        type: "post",
        url: "https://summer.super2021.com/api/diagram/parse_token",
        data: {
            "diagram_token": urlParams['diagram_token']
        },
        dataType: "json",
        success: function(data) {
            project_id = data['payload']['project_id'];
            diagram_id = data['payload']['diagram_id'];
            diagram_name = data['payload']['diagram_name'];
            get_content();
            console.log(data);
        }
    });
}

function update_diagram(diagram_content) {
    $.ajax({
        type: "post",
        url: "https://summer.super2021.com/api/diagram/update_diagram",
        data: {
            "diagram_id": this.diagram_id,
            "diagram_content": diagram_content
        },
        dataType: "json",
        success: function(data){
            console.log(data);
        }
    });
}

function get_content() {
    $.ajax({
        type: "post",
        url: "https://summer.super2021.com/api/diagram/get_content",
        data: {
            "diagram_id": this.diagram_id
        },
        dataType: "json",
        success: function(data){
            diagram_content = data['diagram_content'];
        }
    });
}
