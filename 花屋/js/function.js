$(function () {


    ///////////ナビゲーションが隠れたり出たり//////////
    $('#btn').on('click', function () {
        $('#btn__top').toggleClass('rotateTop');
        $('#btn__middle').toggleClass('hideMiddle');
        $('#btn__bottom').toggleClass('rotateBottom');
        $('#gnav').toggleClass('translateNav');
    });
    ///////////ナビゲーションが隠れたり出たり//////////

    ////////ページ内スクール/////////////////////////////
    $('#gnav').on('click', '.gnav__link', function () {
        const target = $(this).attr('href');
        const targetPos = $(target).offset().top;

        $('html, body').animate({
            scrollTop: targetPos
        }, 300);
        return false;
    });
    ////////ページ内スクール/////////////////////////////



    //////////////////////キャッチ/////////////////////////
    window.addEventListener('scroll', function () {
        const winScrollTop = this.scrollY;
        // 下にスクロールされた時
        if (winScrollTop >= 50) {
            document.getElementById('mv__catch').classList.add('hide');
            document.getElementById('mv__img2').classList.add('show');
        } else {
            // 上にスクロールされた時
            document.getElementById('mv__catch').classList.remove('hide');
            document.getElementById('mv__img2').classList.remove('show');
        }
    });
    //////////////////////キャッチ/////////////////////////

    ///////////////トップキャッチ上下/////////////////////
    window.addEventListener('scroll', function () {
        const winScrollTop = this.scrollY;
        // 下にスクロールされた時
        if (winScrollTop >= 50) {
            document.getElementById('mv__catch').classList.add('hide');
        } else {
            // 上にスクロールされた時
            document.getElementById('mv__catch').classList.remove('hide');
        }
    });

    /////////////////トップキャッチ上下///////////////////////




    ////////////////モーダル////////////////
    $('.fragrance__button').on('click', '.fragrance__link', function () {
        const modal = $(this).attr('data-fragrance');
        $(modal).fadeIn(function () {
            $(this).on('click', function () {
                $(this).fadeOut();
            });
            $(this).on('click', '.fragrance__link', function (e) {
                e.stopPropagation();
            });
        });
        return false;
    });
    //////////////////////モーダル//////////////////










    //////////////フェードイン（授業でやったやつ）//////////////////
    const windowHeight = $(window).innerHeight();
    //ブラウザビューポートの高さ
    $(window).on('scroll', function () {
        const ST = $(window).scrollTop();
        $('.fadeIn2').each(function () {
            const target = $(this).offset().top;
            if (ST > target - windowHeight / 2) {
                $(this).addClass('showElement');
            }
            return false
        });
    });

    //////////////フェードイン（授業でやったやつ）//////////////////







    ///////////////// //ビュアー//////////////////////////////

    $('#view__container').on('click', '.view__link', function () { ////親要素からやる引数たす
        $('#view__img').hide();
        const path = $(this).attr('href');
        $('#view__img').attr('src', path);
        $('#view__img').fadeIn(1000);
        return false
    });
    ////////////////////ビュアー//////////////////////////////
});



/////////////////はじめにでてくる////////////////////////

window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('mv__catch').classList.add('fadeIn');
    $('mv__catch').fadeIn(1000);
});
////////////////////はじめにでてくる/////////////////////



     //////////////フェードイン（授業でやったやつ）////////////////// 
const windowHeight = $(window).innerHeight();
//ブラウザビューポートの高さ
$(window).on('scroll', function () {
    const ST = $(window).scrollTop();
    $('.fadeIn3').each(function () {
        const target = $(this).offset().top;
        if (ST > target - windowHeight / 2) {
            $(this).addClass('showElement2');
        }
        return false
    });
});
  //////////////フェードイン（授業でやったやつ）//////////////////