function onNavigatingTo(args) {
    var page = args.object;
    var gotData=page.navigationContext;
    // console.log(gotData.param1);
    // console.log(gotData.param2);
   console.log("page-2 => navigatingTo");
}
exports.onNavigatingTo = onNavigatingTo;

exports.onNavigatedTo = function(){
console.log("page-2 => navigatedTo");
};

exports.onNavigatedFrom = function(){
console.log("page-2 => onNavigatedFrom");
};

exports.onNavigatingFrom = function(){
console.log("page-2 => onNavigatingFrom");
};