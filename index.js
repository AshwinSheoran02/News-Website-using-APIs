console.log("News Website");
// 75098fa5661e4e1985f6826272b071dd


let newsaccordion = document.getElementById('newsaccordion');

const xhr = new XMLHttpRequest();
xhr.open('POST' ,'https://newsapi.org/v2/top-headlines/sources?apiKey=75098fa5661e4e1985f6826272b071dd' , true );
xhr.getAllResponseHeaders('Content-type' , 'application/json');

let news = `
<div class="card">
<div class="card-header" id="headingOne">
  <h5 class="mb-0">
    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Collapsible Group Item #1
    </button>
  </h5>
</div>

<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
  <div class="card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
  </div>
</div>
</div>
`;