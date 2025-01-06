import React from 'react';
import * as DropdownMenu from 'zeego/dropdown-menu';
import RoundButton from '../Buttons/RoundButton';

const Dropdown = () => {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<RoundButton icon={'ellipsis-horizontal'} label="More" />
			</DropdownMenu.Trigger>

			<DropdownMenu.Content>
				<DropdownMenu.Item key="statement">
					<DropdownMenu.ItemTitle>Statement</DropdownMenu.ItemTitle>
					<DropdownMenu.ItemIcon
						ios={{
							name: 'list.bullet.rectangle.fill',
							pointSize: 24,
						}}
					>
						Statement
					</DropdownMenu.ItemIcon>
				</DropdownMenu.Item>

				<DropdownMenu.Item key="converter">
					<DropdownMenu.ItemTitle>Converter</DropdownMenu.ItemTitle>
					<DropdownMenu.ItemIcon
						ios={{
							name: 'coloncurrencysign.arrow.circlepath',
							pointSize: 24,
						}}
					>
						Converter
					</DropdownMenu.ItemIcon>
				</DropdownMenu.Item>

				<DropdownMenu.Item key="background">
					<DropdownMenu.ItemTitle>Background</DropdownMenu.ItemTitle>
					<DropdownMenu.ItemIcon
						ios={{
							name: 'photo.fill',
							pointSize: 24,
						}}
					>
						Background
					</DropdownMenu.ItemIcon>
				</DropdownMenu.Item>

				<DropdownMenu.Item key="account">
					<DropdownMenu.ItemTitle>Account</DropdownMenu.ItemTitle>
					<DropdownMenu.ItemIcon
						ios={{
							name: 'plus.rectangle.on.folder.fill',
							pointSize: 24,
						}}
					>
						Account
					</DropdownMenu.ItemIcon>
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
};

export default Dropdown;
