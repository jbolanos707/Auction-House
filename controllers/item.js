Auction.ItemController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
      this.get('model').save();    //this line will allow the edited post to be saved and show edited version when page refreshes
    },
    delete: function() {
      if (confirm('Are you sure?')) {
        debugger;
        this.get('model').destroyRecord();
        // this.transitionToRoute('catalog'/:catalog_id');
      }
    }
  }
});