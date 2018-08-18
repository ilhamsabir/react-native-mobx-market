import { types } from "mobx-state-tree"

const User = types
	// this for handle data obj or arr
	.model("User", {
		name: 'Joni iskandar',
	})

	// this for handle computed
	.views(self => {
		changeName() {
			return self.name
		},
	})

export default User