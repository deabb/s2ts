type ChatColor = {
    chatColor: string
}

const ChatColor = (chatCode: string): ChatColor => ({ chatCode })
ChatColor.white = { chatCode: "" }
ChatColor.red = { chatCode: "" }
ChatColor.team = { chatCode: "" }
ChatColor.green = { chatCode: "" }
ChatColor.olive = { chatCode: "" }
ChatColor.brightgreen = { chatCode: "" }
ChatColor.lightred = { chatCode: "" }
ChatColor.silver = { chatCode: "" }
ChatColor.gold = { chatCode: "	" }
ChatColor.lightblue = { chatCode: "" }
ChatColor.blue = { chatCode: "" }
ChatColor.purple = { chatCode: "" }
ChatColor.lighterred = { chatCode: "" }
ChatColor.orange = { chatCode: "" }
ChatColor.format = (chatColor: ChatColor) => `${color.chatCode}`

export { Color }
