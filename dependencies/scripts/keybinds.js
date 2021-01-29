keymage('esc', function () {
    sideMenu();
});

keymage('ctrl-s', function () {
    consoleDebugLog(consolePrefix + consoleDebugCount + "%c" + "Pagina has been saved");
    $("#page_saved").css("display", "none");
    $("#page_saving").css("display", "block");
    saveAll();
    setTimeout(function () {
        $("#page_saved").css("display", "block");
        $("#page_saving").css("display", "none");
    }, 1000);
}, {
    preventDefault: true
});

for (let i = 0; i < 9; i++) {
    keymage('alt-' + eval(i + 1), function () {
        $('#toggleSection' + i).click();
    });
}

keymage('del', function () {
    consoleDebugLog(consolePrefix + consoleDebugCount + "%c" + "CV Delete Modal open.");
    swal({
            title: "CV verwijderen?",
            text: "Weet je zeker dat je je CV wilt verwijderen?",
            icon: "warning",
            buttons: ["Bewaar CV", "Ja, verwijder CV"],
            dangerMode: true,
            closeOnClickOutside: false,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Wij gaan alle data netjes opruimen.", {
                    icon: "success",
                    buttons: false
                });
                

                // setTimeout(function () {
                //     location.href = 'index.html';
                // }, 3000);
            }
        });
}, {
    preventDefault: true
});