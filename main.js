$(document).ready(function () {
    $(".btn").click(function () {

        $(".content").hide(500);


        $('.loader').show(500).animate({ opacity: 1 }, 3000).hide(500).animate({ opacity: 0 }, {duration: 0, complete: function () {
            $('.flash').show(500).animate({ opacity: 1 }, 5000).hide(100).animate({ opacity: 0 }, { duration: 0, complete: function () {
                $('.dead__one').show(500).animate({ opacity: 1 }, 3000).hide(500).animate({ opacity: 0 }, { duration: 0, complete: function () { 
                    $('.dead__two').show(500).animate({ opacity: 1 }, 3000).hide(500).animate({ opacity: 0 }, { duration: 0, complete: function () {
                        $('.dead__three').show(500).animate({ opacity: 1 }, 3000).hide(500).animate({ opacity: 0 }, { duration: 0, complete: function () {
                            $('.dead__four').show(500).animate({ opacity: 1 }, 3000).hide(500).animate({ opacity: 0 }, { duration: 0, complete: function () { 
                                $('.dead__five').show(500).animate({ opacity: 1 }, 3000).hide(500).animate({ opacity: 0 }, { duration: 0, complete: function () { 
                                    $('.dead__boobs').show(500).animate({ opacity: 1 }, 3000).hide(500).animate({ opacity: 0 }, { duration: 0, complete: function () { } });

                                } });

                            } });

                        } });

                    } });

                } });
            }});
        }});
    });
});
