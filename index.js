require("datejs");

function combineUsers(...args) {
	const combinedObject = {
		users: [],
	};
	args.forEach((array) => combinedObject.users.push(...array));
	combinedObject.merge_date = Date.parse("today").toString("M/d/yyyy");
	return combinedObject;
}

module.exports = {
	...(typeof combineUsers !== "undefined" && { combineUsers }),
};
