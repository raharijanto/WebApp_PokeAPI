$.ajax({
    url:"https://pokeapi.co/api/v2/pokemon/"
}).done((result)=>{
    test = "";
    $.each(result.results,function(key,val){
        test += `<tr>
                    <td>${key+1}</td>
                    <td>${val.name}</td>
                    <td><button class="btn btn-primary" onclick="detailChara('${val.url}')" data-bs-toggle="modal" data-bs-target="#modalDetailSW">Detail</button></td>
                </tr>`;
    })
    $("#tbodySW").html(test);
}).fail((error)=>{
    console.log(error);
})

function detailChara(stringURL){
    $.ajax({
        url: stringURL
    }).done((result)=>{
        $("#detail-pic")[0].src = result.sprites.other["official-artwork"].front_default;
        $("#infos-index")[0].innerHTML = result.id;
        $("#infos-name")[0].innerHTML = result.name;
        $("#infos-height")[0].innerHTML = result.height;
        $("#infos-weight")[0].innerHTML = result.weight;
        $("#stats-hp").html(hpStats(result));
        $("#stats-att").html(attStats(result));
        $("#stats-spatt").html(spattStats(result));
        $("#stats-def").html(defStats(result));
        $("#stats-spdef").html(spdefStats(result));
        $("#stats-speed").html(speedStats(result));
        $("#default-front")[0].src = result.sprites.front_default;
        $("#default-back")[0].src = result.sprites.back_default;
        $("#shiny-front")[0].src = result.sprites.front_shiny;
        $("#shiny-back")[0].src = result.sprites.back_shiny;
        
        let types = "";
        $.each(result.types, function(key, val) {
            types += `<span class="badge text-bg-primary">${val.type.name}</span>`;
        })
        $("#infos-type").html(types);

        let ability = "";
        $.each(result.abilities, function(key, val) {
            ability += `<span class="badge text-bg-primary">${val.ability.name}</span>`;
        })
        $("#infos-ability").html(ability);
    }).fail((error)=>{
        console.log(error);
    })
}

function hpStats(stat) {
    test =  "";
    test += `   <div class="col-12" >
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: ${stat.stats[0].base_stat}%" aria-valuenow="${stat.stats[0].base_stat}" aria-valuemin="0" aria-valuemax="100">${stat.stats[0].base_stat}</div>
                    </div>
                </div>`
    return test;
}

function attStats(stat) {
    test =  "";
    test += `   <div class="col-12" >
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: ${stat.stats[1].base_stat}%" aria-valuenow="${stat.stats[1].base_stat}" aria-valuemin="0" aria-valuemax="100">${stat.stats[1].base_stat}</div>
                    </div>
                </div>`
    return test;
}

function spattStats(stat) {
    test =  "";
    test += `   <div class="col-12" >
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: ${stat.stats[3].base_stat}%" aria-valuenow="${stat.stats[3].base_stat}" aria-valuemin="0" aria-valuemax="100">${stat.stats[3].base_stat}</div>
                    </div>
                </div>`
    return test;
}

function defStats(stat) {
    test =  "";
    test += `   <div class="col-12" >
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${stat.stats[2].base_stat}%" aria-valuenow="${stat.stats[2].base_stat}" aria-valuemin="0" aria-valuemax="100">${stat.stats[2].base_stat}</div>
                    </div>
                </div>`
    return test;
}

function spdefStats(stat) {
    test =  "";
    test += `   <div class="col-12" >
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${stat.stats[4].base_stat}%" aria-valuenow="${stat.stats[4].base_stat}" aria-valuemin="0" aria-valuemax="100">${stat.stats[4].base_stat}</div>
                    </div>
                </div>`
    return test;
}

function speedStats(stat) {
    test =  "";
    test += `   <div class="col-12" >
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: ${stat.stats[5].base_stat}%" aria-valuenow="${stat.stats[5].base_stat}" aria-valuemin="0" aria-valuemax="100">${stat.stats[5].base_stat}</div>
                    </div>
                </div>`
    return test;
}

$.ajax({
    url:"https://localhost:44325/api/Netto"
}).done((result)=>{
    console.log(result);
})