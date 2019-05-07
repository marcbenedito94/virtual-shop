var product_details = document.getElementById('product-details');
var out_product_details = '';

out_product_details += `
<table border id="product-details-table" cellspacing="30">
    <tr>
        <td rowspan="3"><img src="../../img/header.jpg"></td>
        <td><h3 class="product-title">Hola</h3></td>
    </tr>
    <tr>
        <td><h5 class="product-description">asasasasasasasasasasasssasa</h5></td>
    </tr>
    <tr>
        <td><h4 class="product-price">asa</h4></td>        
    </tr>
</table>`;

product_details.innerHTML = out_product_details;