app.factory('api_Service', function ($http) {
    return {
        get_list: function (url) {
            console.log(url);
            return $http.get(api_url+url).then(function (data) {
                return data.data;
            });
        },
        post_list: function (url, obj) {
            console.log(url);
            return $http.post(api_url+url, obj).then(function (data) {
                return data.data;
            });
        },
       
        

    }
});

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);
