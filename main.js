$("body").on("keyup keydown keypress change", ".item input", function (e) {
	let pre_tariff_total_all = 0;
	let post_tariff_total_all = 0;
	//finds each item within a table row
	$("tr.item").each(function () {
		const $this_row = $(this);
		//finds the quantity in the row
		const quantity_field = $this_row.find(".qty");
		//defines qty as the value in quantity_field
		let qty = quantity_field.val();
		//same as qty
		const cost_field = $this_row.find(".cost");
		//same as qty
		let cost = cost_field.val();
		//grab the data for the tarriff for each row
		const tariff_pct = $this_row.data("tariff-percent");
		//make it into a number
		let pct = parseFloat(tariff_pct);
		//and make it a percentage instead of a whole number

		pct = pct / 100;
		//make them into numbers. we want floats because the input might not always be a whole #
		qty = parseFloat(qty);

		if (qty === "" || cost === "") {
			return false
		}

		// make them into numbers
		qty = parseFloat(qty);
		cost = parseFloat(cost);

		const pre_tariff_total = qty * cost;

		const post_tariff_total = (pre_tariff_total + (pre_tariff_total * pct));

		pre_tariff_total_sum = pre_tariff_total_sum + pre_tariff_total;
		post_tariff_total_sum = post_tariff_total_sum + post_tariff_total;

		console.log("Pre tariff total");
		console.log(pre_tariff_total);

		$this_row.find(".pre_total span").text(pre_tariff_total);

		$this_row.find(".post_total span").text(post_tariff_total);


	}); //this ends the each loop

	console.log("Pre tariff total sum");
	console.log(pre_tariff_total_sum);
	$("pre_total span").text(pre_tariff_total_sum);

	console.log("Post tariff total sum");
	console.log(post_tariff_total_sum);
	$("pre_total span").text(post_tariff_total_sum);
}); //ends the key press listener