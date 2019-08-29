$(document).ready(function () {

    const matrix = [
        {
            CallType_Dur: 'FinalExpenseInsurance_60',
            Platform: 'Google',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 27,
            Income_30000: 28,
            Income_40000: 29,
            Income_50000: 30,
            Income_60000: 31,
            Income_70000: 32,
            Income_80000: 33,
            Income_90000: 34,
            Income_100000: 35
        },
        {
            CallType_Dur: 'FinalExpenseInsurance_90',
            Platform: 'Google',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 27.25,
            Income_30000: 28.25,
            Income_40000: 29.25,
            Income_50000: 30.25,
            Income_60000: 31.25,
            Income_70000: 32.25,
            Income_80000: 33.25,
            Income_90000: 34.25,
            Income_100000: 35.25
        },
        {
            CallType_Dur: 'FinalExpenseInsurance_120',
            Platform: 'Google',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 27.50,
            Income_30000: 28.50,
            Income_40000: 29.50,
            Income_50000: 30.50,
            Income_60000: 31.50,
            Income_70000: 32.50,
            Income_80000: 33.50,
            Income_90000: 34.50,
            Income_100000: 35.50
        },
        {
            CallType_Dur: 'FinalExpenseInsurance_60',
            Platform: 'Facebook',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 26,
            Income_30000: 27,
            Income_40000: 28,
            Income_50000: 29,
            Income_60000: 30,
            Income_70000: 31,
            Income_80000: 32,
            Income_90000: 33,
            Income_100000: 34
        },
        {
            CallType_Dur: 'FinalExpenseInsurance_90',
            Platform: 'Facebook',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 26.25,
            Income_30000: 27.25,
            Income_40000: 28.25,
            Income_50000: 29.25,
            Income_60000: 30.25,
            Income_70000: 31.25,
            Income_80000: 32.25,
            Income_90000: 33.25,
            Income_100000: 34.25
        },
        {
            CallType_Dur: 'FinalExpenseInsurance_120',
            Platform: 'Facebook',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 26.50,
            Income_30000: 27.50,
            Income_40000: 28.50,
            Income_50000: 29.50,
            Income_60000: 30.50,
            Income_70000: 31.50,
            Income_80000: 32.50,
            Income_90000: 33.50,
            Income_100000: 34.50
        },
        {
            CallType_Dur: 'TermLifeInsurance_60',
            Platform: 'Google',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 27,
            Income_30000: 28,
            Income_40000: 29,
            Income_50000: 30,
            Income_60000: 31,
            Income_70000: 32,
            Income_80000: 33,
            Income_90000: 34,
            Income_100000: 35
        },
        {
            CallType_Dur: 'TermLifeInsurance_90',
            Platform: 'Google',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 27.25,
            Income_30000: 28.25,
            Income_40000: 29.25,
            Income_50000: 30.25,
            Income_60000: 31.25,
            Income_70000: 32.25,
            Income_80000: 33.25,
            Income_90000: 34.25,
            Income_100000: 35.25
        },
        {
            CallType_Dur: 'TermLifeInsurance_120',
            Platform: 'Google',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 27.50,
            Income_30000: 28.50,
            Income_40000: 29.50,
            Income_50000: 30.50,
            Income_60000: 31.50,
            Income_70000: 32.50,
            Income_80000: 33.50,
            Income_90000: 34.50,
            Income_100000: 35.50
        },
        {
            CallType_Dur: 'TermLifeInsurance_60',
            Platform: 'Facebook',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 26,
            Income_30000: 27,
            Income_40000: 28,
            Income_50000: 29,
            Income_60000: 30,
            Income_70000: 31,
            Income_80000: 32,
            Income_90000: 33,
            Income_100000: 34
        },
        {
            CallType_Dur: 'TermLifeInsurance_90',
            Platform: 'Facebook',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 26.25,
            Income_30000: 27.25,
            Income_40000: 28.25,
            Income_50000: 29.25,
            Income_60000: 30.25,
            Income_70000: 31.25,
            Income_80000: 32.25,
            Income_90000: 33.25,
            Income_100000: 34.25
        },
        {
            CallType_Dur: 'TermLifeInsurance_120',
            Platform: 'Facebook',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 26.50,
            Income_30000: 27.50,
            Income_40000: 28.50,
            Income_50000: 29.50,
            Income_60000: 30.50,
            Income_70000: 31.50,
            Income_80000: 32.50,
            Income_90000: 33.50,
            Income_100000: 34.50
        },
        {
            CallType_Dur: 'HealthInsurance_60',
            Platform: 'Google',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 29.25,
            Income_30000: 30.25,
            Income_40000: 31.25,
            Income_50000: 32.25,
            Income_60000: 33.25,
            Income_70000: 34.25,
            Income_80000: 35.25,
            Income_90000: 36.25,
            Income_100000: 37.25
        },
        {
            CallType_Dur: 'HealthInsurance_90',
            Platform: 'Google',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 30,
            Income_30000: 31,
            Income_40000: 32,
            Income_50000: 33,
            Income_60000: 34,
            Income_70000: 35,
            Income_80000: 36,
            Income_90000: 37,
            Income_100000: 38
        },
        {
            CallType_Dur: 'HealthInsurance_120',
            Platform: 'Google',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 30.25,
            Income_30000: 31.25,
            Income_40000: 32.25,
            Income_50000: 33.25,
            Income_60000: 34.25,
            Income_70000: 35.25,
            Income_80000: 36.25,
            Income_90000: 37.25,
            Income_100000: 38.25
        },
        {
            CallType_Dur: 'HealthInsurance_60',
            Platform: 'Facebook',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 27.75,
            Income_30000: 28.75,
            Income_40000: 29.75,
            Income_50000: 30.75,
            Income_60000: 31.75,
            Income_70000: 32.75,
            Income_80000: 33.75,
            Income_90000: 34.75,
            Income_100000: 35.75
        },
        {
            CallType_Dur: 'HealthInsurance_90',
            Platform: 'Facebook',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 28,
            Income_30000: 29,
            Income_40000: 30,
            Income_50000: 31,
            Income_60000: 32,
            Income_70000: 33,
            Income_80000: 34,
            Income_90000: 35,
            Income_100000: 36
        },
        {
            CallType_Dur: 'HealthInsurance_120',
            Platform: 'Facebook',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 28.25,
            Income_30000: 29.25,
            Income_40000: 30.25,
            Income_50000: 31.25,
            Income_60000: 32.25,
            Income_70000: 33.25,
            Income_80000: 34.25,
            Income_90000: 35.25,
            Income_100000: 36.25
        },
        {
            CallType_Dur: 'MedSupp_60',
            Platform: 'Google',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 24.75,
            Income_30000: 25.75,
            Income_40000: 26.75,
            Income_50000: 27.75,
            Income_60000: 28.75,
            Income_70000: 29.75,
            Income_80000: 30.75,
            Income_90000: 31.75,
            Income_100000: 32.75
        },
        {
            CallType_Dur: 'MedSupp_90',
            Platform: 'Google',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 25,
            Income_30000: 26,
            Income_40000: 27,
            Income_50000: 28,
            Income_60000: 29,
            Income_70000: 30,
            Income_80000: 31,
            Income_90000: 32,
            Income_100000: 33
        },
        {
            CallType_Dur: 'MedSupp_120',
            Platform: 'Google',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 25.25,
            Income_30000: 26.25,
            Income_40000: 27.25,
            Income_50000: 28.25,
            Income_60000: 29.25,
            Income_70000: 30.25,
            Income_80000: 31.25,
            Income_90000: 32.25,
            Income_100000: 33.25
        },
        {
            CallType_Dur: 'MedSupp_60',
            Platform: 'Facebook',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 22.75,
            Income_30000: 23.75,
            Income_40000: 24.75,
            Income_50000: 25.75,
            Income_60000: 26.75,
            Income_70000: 27.75,
            Income_80000: 28.75,
            Income_90000: 29.75,
            Income_100000: 30.75
        },
        {
            CallType_Dur: 'MedSupp_90',
            Platform: 'Facebook',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 23,
            Income_30000: 24,
            Income_40000: 25,
            Income_50000: 26,
            Income_60000: 27,
            Income_70000: 28,
            Income_80000: 29,
            Income_90000: 30,
            Income_100000: 31
        },
        {
            CallType_Dur: 'MedSupp_120',
            Platform: 'Facebook',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 23.25,
            Income_30000: 24.25,
            Income_40000: 25.25,
            Income_50000: 26.25,
            Income_60000: 27.25,
            Income_70000: 28.25,
            Income_80000: 29.25,
            Income_90000: 30.25,
            Income_100000: 31.25
        },
        {
            CallType_Dur: 'AutoInsurance_60',
            Platform: 'Google',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 27.75,
            Income_30000: 28.75,
            Income_40000: 29.75,
            Income_50000: 30.75,
            Income_60000: 31.75,
            Income_70000: 32.75,
            Income_80000: 33.75,
            Income_90000: 34.75,
            Income_100000: 35.75
        },
        {
            CallType_Dur: 'AutoInsurance_90',
            Platform: 'Google',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 28,
            Income_30000: 29,
            Income_40000: 30,
            Income_50000: 31,
            Income_60000: 32,
            Income_70000: 33,
            Income_80000: 34,
            Income_90000: 35,
            Income_100000: 36
        },
        {
            CallType_Dur: 'AutoInsurance_120',
            Platform: 'Google',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 28.25,
            Income_30000: 29.25,
            Income_40000: 30.25,
            Income_50000: 31.25,
            Income_60000: 32.25,
            Income_70000: 33.25,
            Income_80000: 34.25,
            Income_90000: 35.25,
            Income_100000: 36.25
        },
        {
            CallType_Dur: 'AutoInsurance_60',
            Platform: 'Facebook',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 25.75,
            Income_30000: 26.75,
            Income_40000: 27.75,
            Income_50000: 28.75,
            Income_60000: 29.75,
            Income_70000: 30.75,
            Income_80000: 31.75,
            Income_90000: 32.75,
            Income_100000: 33.75
        },
        {
            CallType_Dur: 'AutoInsurance_90',
            Platform: 'Facebook',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 26,
            Income_30000: 27,
            Income_40000: 28,
            Income_50000: 29,
            Income_60000: 30,
            Income_70000: 31,
            Income_80000: 32,
            Income_90000: 33,
            Income_100000: 34
        },
        {
            CallType_Dur: 'AutoInsurance_120',
            Platform: 'Facebook',
            Age: '0_120',
            Geo: 'USA',
            Income_20000: 26.25,
            Income_30000: 27.25,
            Income_40000: 28.25,
            Income_50000: 29.25,
            Income_60000: 30.25,
            Income_70000: 31.25,
            Income_80000: 32.25,
            Income_90000: 33.25,
            Income_100000: 34.25
        },
    ];

    const calculatePricing = (matrix, options) => {
        let price = 0;
        let callType = options.callType,
            platform = options.platform,
            geo = options.geo,
            q_time = options.q_time,
            income = options.income,
            age = options.age;

        // Calculations
        callType = `${callType}${q_time}`;

        if (income < 30000) income = `Income_20000`;
        if (income >= 30000 && income < 40000) income = `Income_30000`;
        if (income >= 40000 && income < 50000) income = `Income_40000`;
        if (income >= 50000 && income < 60000) income = `Income_50000`;
        if (income >= 60000 && income < 70000) income = `Income_60000`;
        if (income >= 70000 && income < 80000) income = `Income_70000`;
        if (income >= 80000 && income < 90000) income = `Income_80000`;
        if (income >= 90000 && income < 100000) income = `Income_90000`;
        if (income >= 100000) income = `Income_100000`;

        $.each(matrix, (i, doc) => {
            // console.log(i, doc);
            if (doc.CallType_Dur == callType && doc.Platform == platform && doc.Geo == geo) {
                price += doc[income];
            }
        });

        return price;
    }

    const $form = $('#pricing');
    const $submit = $form.find('button[type="submit"]');
    const $customSubmit = $('body').find('.custom-submit');

    const $callType = $('#call-type');
    const $platform = $('#platform');
    const $geo = $('#geo');
    const $q_time = $('#q_time');
    const $income = $('#income');
    const $age1 = $('#age_1');
    const $age2 = $('#age_2');
    const $full_name_pricing = $('#full_name_pricing');
    const $email_pricing = $('#email_pricing');
    const $phone_pricing = $('#phone_pricing');

    let callType = $callType.val(),
        platform = $platform.val(),
        geo = $geo.val(),
        q_time = $q_time.val(),
        income = $income.val(),
        age = `${$age1.val()}_${$age2.val()}`,
        full_name_pricing = $full_name_pricing.val(),
        email_pricing = $email_pricing.val();

    $callType.on('change', function () {
        $callType.parent().removeClass('has-error');
        callType = $callType.val();
    });

    $platform.on('change', function () {
        $platform.parent().removeClass('has-error');
        platform = $platform.val();
    });

    $geo.on('change', function () {
        $geo.parent().removeClass('has-error');
        geo = $geo.val();
    });

    $q_time.on('change', function () {
        $q_time.parent().removeClass('has-error');
        q_time = $q_time.val();
    });

    $income.on('keyup', function () {
        $income.parent().removeClass('has-error');
        income = $income.val();
    });

    $age1.on('keyup', function () {
        $age1.parent().removeClass('has-error');
        age = `${$age1.val()}_${$age2.val()}`;
    });

    $age2.on('keyup', function () {
        $age2.parent().removeClass('has-error');
        age = `${$age1.val()}_${$age2.val()}`;
    });

    $full_name_pricing.on('keyup', function () {
        $full_name_pricing.parent().removeClass('has-error');
        full_name_pricing = $full_name_pricing.val();
    });

    $email_pricing.on('keyup', function () {
        $email_pricing.parent().removeClass('has-error');
        email_pricing = $email_pricing.val();
    });

    $phone_pricing.on('keyup', function () {
        $phone_pricing.parent().removeClass('has-error');
        phone_pricing = $phone_pricing.val();
    });

    $('#send_pricing_form').on('click', function () {
        if (full_name_pricing != '' && email_pricing != '' && phone_pricing != '') {
            $('#myModal').modal('hide');
            $form.submit();
        } else {
            $('.modal').find('input').each((i, el) => {
                if ($(el).val() == '') {
                    $(el).parent().addClass('has-error');
                }
            });
        }
    })

    $customSubmit.on('click', function () {
        if (callType != '' && platform != '' && geo != '' && q_time != '' && income != '' && $age1.val() != '' && $age2.val() != '') {
            $('#myModal').modal('show');
        } else {
            $form.find('input').each((i, el) => {
                if ($(el).val() == '') {
                    $(el).parent().addClass('has-error');
                }
            });
            $form.find('select').each((i, el) => {
                if ($(el).val() == '') {
                    $(el).parent().addClass('has-error');
                }
            });
        }
    })

    $form.on('submit', function (e) {
        e.preventDefault();
        $submit.addClass('purple').html('Calculating...');
        let price = calculatePricing(matrix, {
            callType,
            platform,
            geo,
            q_time,
            income,
            age
        });
        if (!submitted) {
            const q = {
                callType,
                platform,
                geo,
                q_time,
                income,
                age,
                price
            }
            localStorage.setItem('q', JSON.stringify(q));
            submitted = true;
            // Save on firebase
            save('user', {
                full_name: full_name_pricing,
                email: email_pricing,
                phone: phone_pricing,
                age,
                price
            }).then(id => {
                $('.toRemove').remove();
                $('.custom-submit').attr('type', 'submit').prop('data-toggle', false).prop('data-target', false).removeClass('purple').html('Calculate Price');
                $('#price').html(parseFloat(price).toFixed(2));
            }).catch(err => console.log(err.responseJSON));
        } else {
            $('#price').html(parseFloat(price).toFixed(2));
            $submit.removeClass('purple').html('Calculate Price');
        }
        // $submit.click();
    });

    // $('body').on('click', '#calculate_price', function () {
    //     window.open(`https://calendly.com/callhype/demo?name=${full_name_pricing}&email=${email_pricing}`, '_blank');
    // });

});