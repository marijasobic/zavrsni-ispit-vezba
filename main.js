$(document).ready(function () {
    $('.prvi').hide();
    $('.drugi').hide();


    $('#unos').click(function () {
        $('.prvi').show(500);
        $('.drugi').hide();

    });
    $("#test1").mouseleave(function () {
        var test1 = Number($("#test1").val());
        if (test1 < 0 || test1 > 25) {
            alert("Opseg poena za test je od 0 do 25!")
        }
    });
    $("#test2").mouseleave(function () {
        var test2 = Number($("#test2").val());
        if (test2 < 0 || test2 > 25) {
            alert("Opseg poena za test je od 0 do 25!")
        }
    });

    $("#projekat").mouseleave(function () {
        var projekat = Number($("#projekat").val());
        if (projekat < 0 || projekat > 50) {
            alert("Opseg poena za odbranu projekta je od 0 do 50!")
        }

    });

    function Student(imeIprezime, test1, test2, projekat) {
        this.imeIprezime = imeIprezime;
        this.test1 = test1;
        this.test2 = test2;
        this.projekat = projekat;
        this.ukupno = this.test1 + this.test2 + this.projekat;
    }

    var niz = [];
    $("#sacuvaj").click(function () {
        $('.prvi').show();
        var imeIprezime = String($('#ime').val());
        var test1 = Number($("#test1").val());
        var test2 = Number($("#test2").val());
        var projekat = Number($("#projekat").val());

        if (imeIprezime == "") {
            $('#p1').html('Molimo Vas da unesete ime i prezime studenta!!!');
            return false;
        }

        if ((test1 < 0 || test1 > 25) || test1 == "") {
            $('#p2').html('Molimo Vas da unesete rezulate testa1!!!');
            return false;
        }
        if (test2 < 0 || test2 > 25 || test2 == "") {
            $('#p3').html('Molimo Vas da unesete rezulate testa2!!!');
            return false;
        }
        if (projekat < 0 || projekat > 50 || projekat == "") {
            $('#p4').html('Molimo Vas da unesete rezulate odbrane projekta!!!');;
            return false;
        } else {
            $(".prvi").show(function () {
                alert("Uspesno snimljen polaznik!");
                return true;
            });
        }

        var noviStudent = new Student($('#ime').val(), +$("#test1").val(), +$("#test2").val(), +$("#projekat").val())
        niz.push(noviStudent)
        // niz.push(new Student($('#ime').val(), +$('#test1').val(), +$('#test2').val(), +$('#odbrana').val()));
        niz.sort(function (a, b) {
            return b.ukupno - a.ukupno;

        })

        console.log(niz)
        $('#ime').val('');
        $('#test1').val('');
        $('#test2').val('');
        $('#projekat').val('');
        $('span').text('');
    })

    $('#prikaz').click(function () {
        $('tbody').empty();
        $('.prvi').hide();
        $('.drugi').fadeIn(500);

        for (let i = 0; i < niz.length; i++) {
            console.log(niz)
            $("tbody").append($(`<tr><td>${niz[i].imeIprezime}</td><td>${niz[i].test1}</td><td>${niz[i].test2}</td><td>${niz[i].projekat}</td><td>${niz[i].ukupno}</td></tr>`));
        }

        for (let j = 0; j < niz.length + 1; j++) {
            $('tr:eq(' + j + ')').attr('id', 'id' + j)
        }

        for (let j = 1; j < niz.length + 1; j++) {
            if (niz[j - 1].ukupno >= 80) {
                $('#id' + j).css('background-color', '#f5f567')
            } else
            if (niz[j - 1].ukupno >= 55 && niz[j - 1].ukupno <= 80) {
                $('#id' + j).css('background-color', '#35d135')
            } else {
                $('#id' + j).css('background-color', '#f15555')
            }
        }

    });
});

//VERZIJA SA LocalStorage koja pamti samo poslednjeg
// var student = [imeIprezime,test1, test2, odbrana, ukupno]
//   var sum=0;
//     $.each(student, function (index,val) {
//         //  localStorage.setItem("key:"+k+"value:"+v);



//        sum+= (
//          localStorage.setItem("Ime i prezime: ", $('#ime').val())+
//          localStorage.setItem("Test1: ", $("#test1").val())+
//         localStorage.setItem("Test2: ", $("#test2").val())+
//         localStorage.setItem("Odbrana: ", odbrana)+
//         localStorage.setItem("Ukupno: ", ukupno))

// alert("key:"+k+"value:"+v)
// })  
// for(var i=0; i<student.length;i++) {
//     localStorage.setItem("Ime i prezime"+(i+1),student[i].imeIprezime);
//     localStorage.setItem("Test1"+(i+1),student[i].test1);
//     localStorage.setItem("Test2"+(i+1),student[i].test2);
//     localStorage.setItem("Odbrana"+(i+1),student[i].odbrana);
//     localStorage.setItem("Ukupno"+(i+1),student[i].ukupno);
// }      

// console.log(sum)
//    alert(
//     localStorage.getItem("Ime i prezime: ")+" "+
//     localStorage.getItem("Test1: ")+" "+
//     localStorage.getItem("Test2: ")+" "+
//     localStorage.getItem("Odbrana: ")+" "+
//     localStorage.getItem("Ukupno: ")
//    )
//     })

// localStorage.getItem("Ime i prezime");
// localStorage.getItem("Test1");
// localStorage.getItem("Test2");
// localStorage.getItem("Odbrana");
// localStorage.getItem("Ukupno");

// console.log(imeIprezime)