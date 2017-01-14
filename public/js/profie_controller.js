App.ng.controller("profile_controller", function ($scope, $q, Profile) {

//    $scope.dbResult = {};
//
//    Profile.getAll({}, function (result) {
//        $scope.dbResult = result;
//
//    });


    $scope.profile = {
        "basic": {
            name: "",
            date_of_birth: "",
            current_address: "",
            permanent_address: "",
            contact: "",
            alternate_contact: "",
            primary_email: "",
            secondary_email: "",
            pan: ""

        },
        "education": [],
        "skill": []
    };
    $scope.available = {

        "passport": {
            number: "",
            issue_date: "",
            exp_date: "",
            visa_country: "",
            type: ""
        },
        "workexperience": [

        ],
        "projects": [

        ],
        "family": {
            father: "",
            mother: "",
            family_business: ""

        },
        "achievements": {
            type: "",
            descriotion: "",
            year: ""

        }

    };
    $scope.addEducationFields = function () {
        if ($scope.profile.education) {
            $scope.profile.education.push({
                "level": "",
                "institute": "",
                "specialization": "",
                "join_year": "",
                "passout_year": "",
                "percentage": ""
            });
        }
    };
    $scope.addProjectFields = function () {
        if ($scope.profile.projects) {
            $scope.profile.projects.push({
                "name": "",
                "customer": "",
                "duration": "",
                "team_size": "",
                "technology": "",
                "description": "",
                "role": ""
            });
        }
    };
    $scope.addSkillFields = function () {
        if ($scope.profile.skill) {
            $scope.profile.skill.push({
                "Name": "",
                "exp_level": "",
                "last_used": ""

            });
        }
    };
    $scope.addWorkFields = function () {
        if ($scope.profile.workexperience) {
            $scope.profile.workexperience.push({
                "organization": "",
                "from": "",
                "to": "",
                "role": "",
                "description": ""
            });
        }
    };
    $scope.addSection = function (key, selected) {
        $scope.profile[key] = angular.copy(selected);
        delete($scope.available[key]);
    };


    $scope.onSelect = function changePicture() {
        $('#upload').click();
    }
    $scope.urlSelect = function readURL(input) {
        if (input.files && input.files[0])
        {
            var reader = new FileReader();
            reader.onload = function (e)
            {
                $('#image').attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    };



    $scope.SaveData = function () {
        Profile.create({}, $scope.profile);
    };

    $scope.checkNameAvail = function (name) {
        var result = $scope.list.filter(function (item) {
            return item["name"].indexOf(name) > -1;
        });
        return result.length > 0;
    };


});