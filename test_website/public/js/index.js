'use strict'

//login page
let userAccount = $('#userAccount');
let userPassword = $('#userPassword');
let normalUserSignInButton = $('#normalUserSignInButton');
let gymUserSignInButton = $('#gymUserSignInButton');

//member sign up
let inputMemberId = $('#inputMemberId');
let inputMemberAge = $('#inputMemberAge');
let inputMemberSex = $('#inputMemberSex');
let inputMemberAddr = $('#inputMemberAddr');
let inputMemberPassword = $('#inputMemberPassword');
let createMemberAccountButton = $('#createMemberAccountButton');

//gym sign up
let inputGymNo = $('#inputGymNo');
let inputGymName = $('#inputGymName');
let inputGymAddress = $('#inputGymAddress');
let inputGymPrice = $('#inputGymPrice');
let inputGymPassword = $('#inputGymPassword');
let createGymAccountButton = $('#createGymAccountButton');

//gym interface
let showClientRecordButton = $('#showClientRecordButton');

//member interface
let showTrainingRecordButton = $('#showTrainingRecordButton');
let showBodyRecordButton = $('#showBodyRecordButton')
let showDietRecordButton = $('#showDietRecordButton');

let trainingDate = $('#trainingDate');
let trainingSets = $('#trainingSets');
let trainingReps = $('#trainingReps');
let TrainingWeight = $('#TrainingWeight');
let trainingPart = $('#trainingPart');
let addTrainingRecordButton = $('#addTrainingRecordButton');

let bodyDate = $('#bodyDate');
let bodyWeight = $('#bodyWeight');
let bodyBFR = $('#bodyBFR');
let addBodyRecordButton = $('#addBodyRecordButton');

let dietDate = $('#dietDate');
let dietMeal = $('#dietMeal');
let dietFat = $('#dietFat');
let dietCH = $('#dietCH');
let dietProtein = $('#dietProtein');
let addDietRecordButton = $('#addDietRecordButton');

//update member data
let MemberId = $('#MemberId');
let MemberAge = $('#MemberAge');
let MemberSex = $('#MemberSex');
let MemberAddr = $('#MemberAddr');
let updateMemberSex = $('#updateMemberSex');
let updateMemberAddr = $('#updateMemberAddr');
let updateBasicButton = $('#updateBasicButton');

let ChronicDisease = $('#ChronicDisease');
let BloodSugar = $('#BloodSugar');
let Lipid = $('#Lipid');
let BloodPressure = $('#BloodPressure');
let updateChronicDisease = $('#updateChronicDisease');
let updateBloodSugar = $('#updateBloodSugar');
let updateLipid = $('#updateLipid');
let updateBloodPressure = $('#updateBloodPressure');
let updateHealthButton = $('#updateHealthButton');

normalUserSignInButton.on('click', function () {
    if(checkMember(userAccount.val(), userPassword.val())){
        window.location = "../Member User.html";
    }
})
gymUserSignInButton.on('click', function () {
    if(checkMember(userAccount.val(), userPassword.val())){
        window.location = "../Gym User.html";
    };
})

function checkMember(account, password) {
    if(!(account === undefined || account === null || account === '' || password === undefined ||password === null || password || '')) {
        $.get('/checkMember', {
            account: account,
            password: password
        }, function (result) {
            if(result.account != undefined){
                log('登入成功')
                return true;
            }
            else {
                log('登入失敗')
                return false;
            }
        })
    }
    else{
        log('帳號或密碼錯誤');
        return false;
    }
}

//show the client training part from the most to the least total time
let gymId = '';
showClientRecordButton.on('click', function () {
    $.get('/clientRecord', {
        gymId : gymId
    }, function (data) {
        $('#trainingPart').text(data.trainingPart);
        $('#trainingTime').text(data.trainingTime);
    })
})

//show 10 time training record in recent, one summation
showTrainingRecordButton.on('click', function () {
    $.get('/trainingRecord', {
        userAccount: userAccount
    }, function (result) {
        $('#showTrainingRecord').text('近十次訓練量: '+ result.showTraingRecord);
        $('#showTrainingState').text('您的訓練狀態: '+ result.showTraingState);
    })
})

//show 10 time body record in recent, one summation
showBodyRecordButton.on('click', function () {
    $.get('/bodyRecord',{
        userAccount: userAccount
    }, function (result) {
        $('#showBodyRecord').text('近十次飲食記錄: '+ result.showBodyRecord);
        $('#showBodyState').text('您的身體狀態: '+ result.showBodyState);
    })
})

//show 10 time body record in recent, one summation
showDietRecordButton.on('click', function () {
    $.get('/dietRecord',{
        userAccount: userAccount
    }, function (result) {
        $('#showDietRecord').text('近十次飲食記錄: '+ result.showBodyRecord);
        $('#showDietState').text('您的身體狀態: '+ result.showBodyState);
    })
})

//update member address and sex in database
updateBasicButton.on('click', function () {
    $.put('/update',{
        userAccount : userAccount,
        updateMemberAddr: updateMemberAddr,
        updateMemberSex: updateMemberSex
    }, function (result) {

    })
})
//show member record on update page
$.get('/memberRecord', {
    userAccount : userAccount
}, function (account) {
    MemberId.text(account.MemberId);
    MemberAge.text(account.MemberAge);
    MemberSex.text(account.MemberSex);
    MemberAddr.text(account.MemberAddr);
})

updateHealthButton.on('click', function () {
    $.put('/updateHealth',{
        userAccount : userAccount,
        updateChronicDisease : updateChronicDisease,
        updateBloodSugar : updateBloodSugar,
        updateLipid : updateLipid,
        updateBloodPressure : updateBloodPressure
    }, function (result) {

    })
})

$.get('/healthRecord', {
    userAccount : userAccount
}, function (account) {
    ChronicDisease.text(account.ChronicDisease);
    BloodSugar.text(account.BloodSugar);
    Lipid.text(account.Lipid);
    BloodPressure.text(account.BloodPressure);
})

createMemberAccountButton.on('click', function () {
    $.post('/createMember',{
        inputMemberId : inputMemberId,
        inputMemberAge : inputMemberAge,
        inputMemberSex : inputMemberSex,
        inputMemberAddr : inputMemberAddr,
        inputMemberPassword : inputMemberPassword
    }, function (account) {

    })
})

createGymAccountButton.on('click', function () {
    $.post('/createGym', {
        inputGymNo : inputGymNo,
        inputGymName : inputGymName,
        inputGymAddress : inputGymAddress,
        inputGymPrice : inputGymPrice,
        inputGymPassword : inputGymPassword
    }, function (account) {

    })
})

addTrainingRecordButton.on('click', function () {
    $.post('/addTrainingRecord', {
        userAccount : userAccount,
        trainingDate : trainingDate,
        trainingSets : trainingSets,
        trainingReps : trainingReps,
        TrainingWeight : TrainingWeight,
        trainingPart : trainingPart
    }, function (account) {

    })
})

addBodyRecordButton.on('click', function () {
    $.post('/addBodyRecord', {
        userAccount : userAccount,
        bodyDate : bodyDate,
        bodyWeight : bodyWeight,
        bodyBFR : bodyBFR
    })
})

addDietRecordButton.on('click', function () {
    $.post('/addDietRecord', {
        userAccount : userAccount,
        dietDate : dietDate,
        dietMeal : dietMeal,
        dietFat : dietFat,
        dietCH : dietCH,
        dietProtein : dietProtein
    }, function (account) {
        
    })
})