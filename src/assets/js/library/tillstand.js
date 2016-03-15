function __handle__(stateName) {
  return {
    affirmative: `is-${stateName}`,
    negative: `not-${stateName}`
  }
}

function __affirm__(target, states) {
  switch (__assess__(target, states)) {
    case false:
      target.className = target.className.replace(states.negative, states.affirmative);
      break;
    case null:
      target.className += ` ${states.affirmative}`;
  }
}
function __negate__(target, states) {
  if (__assess__(target, states)) {
    target.className = target.className.replace(states.affirmative, states.negative);
  }
}

function __assess__(target, state) {
  if (target.className.search(state.affirmative) > -1) {
    return true;
  } else if (target.className.search(state.negative) > -1) {
    return false;
  } else {
    return null;
  }
}

module.exports.check = function check(target, stateName) {
  if (typeof stateName === 'string') {
    stateName = __handle__(stateName);
  }
  switch (true) {
    case (target instanceof HTMLElement):
      return __assess__(target, stateName);
    case (target instanceof NodeList):
    case (target instanceof jQuery):
    case (target instanceof Array):
      for(let i = 0; i < target.length; i++) {
        if (!__assess__(target[i], stateName)) {
          return false;
        }
      }
      return true;
    default: return;
  }
}

module.exports.toggle = function toggle(target, stateName) {
  if (typeof stateName === 'string') {
    stateName = __handle__(stateName);
  }
  switch (true) {
    case (target instanceof HTMLElement):
      if (!__assess__(target, stateName)) {
        __affirm__(target, stateName);
        return true;
      } else {
        __negate__(target, stateName);
        return false;
      }
    case (target instanceof NodeList):
    case (target instanceof jQuery):
    case (target instanceof Array):
      for(let i = 0; i < target.length; i++) {
        toggle(target[i], stateName);
      }
      break;
    default: return;
  }
}

module.exports.affirm = function affirm(target, stateName) {
  if (typeof stateName === 'string') {
    stateName = __handle__(stateName);
  }
  switch (true) {
    case (target instanceof HTMLElement):
      if (!__assess__(target, stateName)) {
        __affirm__(target, stateName);
      }
      break;
    case (target instanceof NodeList):
    case (target instanceof jQuery):
    case (target instanceof Array):
      for(let i = 0; i < target.length; i++) {
        affirm(target[i], stateName);
      }
      break;
    default: return;
  }
}

module.exports.negate = function negate(target, stateName) {
  if (typeof stateName === 'string') {
    stateName = __handle__(stateName);
  }
  switch (true) {
    case (target instanceof HTMLElement):
      if (__assess__(target, stateName)) {
        __negate__(target, stateName);
      }
      break;
    case (target instanceof NodeList):
    case (target instanceof jQuery):
    case (target instanceof Array):
      for(let i = 0; i < target.length; i++) {
        negate(target[i], stateName);
      }
      break;
    default: return;
  }
}