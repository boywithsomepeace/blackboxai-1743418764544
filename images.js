const assets = {
    player: {
        up: 'https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        down: 'https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        left: 'https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        right: 'https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    enemies: {
        slime: {
            image: 'https://images.pexels.com/photos/1624076/pexels-photo-1624076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            width: 32,
            height: 32,
            health: 30,
            speed: 1.5,
            damage: 10
        },
        skeleton: {
            image: 'https://images.pexels.com/photos/1624076/pexels-photo-1624076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
            width: 32,
            height: 32,
            health: 50,
            speed: 2,
            damage: 15
        }
    },
    tiles: {
        grass: 'https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stone: 'https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        water: 'https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    ui: {
        healthBar: 'https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        inventorySlot: 'https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
};

// Preload all images
function preloadImages() {
    const imagePromises = [];
    
    function loadImage(url) {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(img);
            img.onerror = () => resolve(null);
        });
    }

    // Load all player sprites
    Object.values(assets.player).forEach(url => {
        imagePromises.push(loadImage(url));
    });

    // Load all enemy sprites
    Object.values(assets.enemies).forEach(url => {
        imagePromises.push(loadImage(url));
    });

    // Load all tile textures
    Object.values(assets.tiles).forEach(url => {
        imagePromises.push(loadImage(url));
    });

    // Load all UI elements
    Object.values(assets.ui).forEach(url => {
        imagePromises.push(loadImage(url));
    });

    return Promise.all(imagePromises);
}

// Export as module
export const gameAssets = {
    assets,
    preloadImages
};
