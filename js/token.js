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
function parse_token() {
    $.ajax({
        type: "post",
        url: "https://summer.super2021.com/api/diagram/parse_token",
        data: {
            "diagram_token": urlParams['diagram_token']
        },
        dataType: "json",
        success:function(data) {
            project_id = data['payload']['project_id']
            diagram_id = data['payload']['diagram_id']
            diagram_name = data['payload']['diagram_name']
            console.log(data);
            console.log(project_id);
            console.log(diagram_id);
            console.log(diagram_name);
        }
    });
}

function create_diagram(diagram_name) {
    $.ajax({
        type: "post",
        url: "https://summer.super2021.com/api/diagram/create_diagram",
        data: {
            "project_id": this.project_id,
            "diagram_name": diagram_name
        },
        dataType: "json",
        success:function(data){
            console.log(data);
        }
    });
}

function rename_diagram(diagram_old_name, diagram_new_name) {
    $.ajax({
        type: "post",
        url: "https://summer.super2021.com/api/diagram/rename_diagram",
        data: {
            "diagram_old_name": diagram_old_name,
            "diagram_new_name": diagram_new_name,
        },
        dataType: "json",
        success:function(data){
            console.log(data);
        }
    });
}

function delete_diagram(diagram_name) {
    $.ajax({
        type: "post",
        url: "https://summer.super2021.com/api/diagram/delete_diagram",
        data: {
            "diagram_name": diagram_name
        },
        dataType: "json",
        success:function(data){
            console.log(data);
        }
    });
}
