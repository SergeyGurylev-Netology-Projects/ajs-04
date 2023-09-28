export function healthLevel(hero) {
  if (hero.health > 50) {
    return 'healthy';
  } if (hero.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}

export function sortHeroesByLifePoints(heroes) {
  return heroes.sort((a, b) => b.health - a.health);
}
