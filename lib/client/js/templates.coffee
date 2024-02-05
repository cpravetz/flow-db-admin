
Template.AdminDashboardView.rendered = ->
	table = @$('.dataTable').DataTable()

Template.AdminDashboardView.helpers
	hasDocuments: ->
		AdminCollectionsCount.findOne({collection: Session.get 'admin_collection_name'})?.count > 0
	newPath: ->
		FlowRouter.path "/admin/new/:coll",{coll: Session.get 'admin_collection_name' }
	admin_table: ->
		AdminTables[Session.get 'admin_collection_name']

Template.adminUsersIsAdmin.helpers checkadmin: ->
	Roles.userIsInRole @_id, 'admin'

Template.adminEditBtn.helpers path: ->
  FlowRouter.path '/admin/edit/:coll/:_id',
    coll: Session.get('admin_collection_name')
    _id: @_id

Template.adminDeleteBtn.helpers path: ->
  FlowRouter.path '/admin/edit/:coll/:_id', {
    coll: Session.get('admin_collection_name')
    _id: @_id
  }, action: 'delete'

Template.AdminHeader.helpers
	profilepath: -> FlowRouter.path '/admin/edit/:coll/:_id',
	  coll: 'Users'
	  _id: Meteor.userId()
	adminPrefix: => Meteor.settings.public.adminPrefix

Template.AdminDashboardEdit.rendered = ->
	editcollectionName = FlowRouter.getParam 'collectionName'
	editId	= FlowRouter.getParam '_id'
	Session.set 'admin_doc', adminCollectionObject(editcollectionName).findOne _id : editId

Template.AdminDashboardEdit.helpers
	fadmin_doc: ->
	  editcollectionName = FlowRouter.getParam 'collectionName'
	  editId	= FlowRouter.getParam '_id'
	  adminCollectionObject(editcollectionName).findOne _id : editId if editcollectionName && editId
  action: -> FlowRouter.getQueryParam 'action'
