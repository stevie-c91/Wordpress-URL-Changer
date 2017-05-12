function updateScript() {
    var dbPrefix = document.getElementById("dbPrefix").value;
    var oldUrl = document.getElementById("oldUrl").value;
    var newUrl = document.getElementById("newUrl").value;
    var script = "UPDATE " + dbPrefix + "_options SET option_value = replace(option_value, '" + oldUrl + "', '" + newUrl + "') WHERE option_name = 'home' OR option_name = 'siteurl'; UPDATE " + dbPrefix + "_posts SET guid = replace(guid, '" + oldUrl + "','" + newUrl + "'); UPDATE " + dbPrefix + "_posts SET post_content = replace(post_content, '" + oldUrl + "', '" + newUrl + "'); UPDATE " + dbPrefix + "_postmeta SET meta_value = replace(meta_value,'" + oldUrl + "','" + newUrl + "');";
    var script = document.getElementById("script").value = script;
}

function copy_to_clipboard(id) {
    document.getElementById(id).select();
    document.execCommand('copy');
    document.getElementById("success").classList.remove("hidden");
}