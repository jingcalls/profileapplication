Template.userdata.helpers
({
	profiledata: function()
	{
		return Profiledata.find();
	}
});

Template.body.events
({
	"click .btnsave": function (event)
		{
			Profiledata.insert
			({
				Name: $(".name").val(),
				Age: $(".age").val(),
				Course: $(".course").val(),
				Address: $(".address").val(),
				Contact: $(".contact").val(),
				createdAt: new Date()
				
			});
			return false;
		},
	"click .btndelete": function (event)
		{
			Profiledata.remove(this._id);
			return false;
		}
});