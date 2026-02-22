JEIEvents.hideItems(event => {
    const toHide = [
        /ars_nouveau:thread_.*/,
        'sophisticatedbackpacks:netherite_backpack',
        'sophisticatedbackpacks:diamond_backpack',
        'sophisticatedbackpacks:stack_upgrade_tier_4',
        'sophisticatedbackpacks:stack_upgrade_omega_tier',
        'sophisticatedbackpacks:inception_upgrade'
    ]
    
    toHide.forEach(id => {
        event.hide(id)
    })
})