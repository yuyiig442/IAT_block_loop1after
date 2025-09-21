/***************************** 
 * Iat_Block_Loop1After *
 *****************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'IAT_block_loop1after';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);





flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'IAT_block_loop1.xlsx', 'path': 'IAT_block_loop1.xlsx'},
    {'name': 'IAT_block1.xlsx', 'path': 'IAT_block1.xlsx'},
    {'name': 'pic/fat1.png', 'path': 'pic/fat1.png'},
    {'name': 'pic/fat2.png', 'path': 'pic/fat2.png'},
    {'name': 'pic/fat3.png', 'path': 'pic/fat3.png'},
    {'name': 'pic/fat4.png', 'path': 'pic/fat4.png'},
    {'name': 'pic/thin1.png', 'path': 'pic/thin1.png'},
    {'name': 'pic/thin2.png', 'path': 'pic/thin2.png'},
    {'name': 'pic/thin3.png', 'path': 'pic/thin3.png'},
    {'name': 'pic/thin4.png', 'path': 'pic/thin4.png'},
    {'name': 'pic/intro1.png', 'path': 'pic/intro1.png'},
    {'name': 'IAT_block2.xlsx', 'path': 'IAT_block2.xlsx'},
    {'name': 'pic/want1.png', 'path': 'pic/want1.png'},
    {'name': 'pic/want2.png', 'path': 'pic/want2.png'},
    {'name': 'pic/want3.png', 'path': 'pic/want3.png'},
    {'name': 'pic/want4.png', 'path': 'pic/want4.png'},
    {'name': 'pic/do1.png', 'path': 'pic/do1.png'},
    {'name': 'pic/do2.png', 'path': 'pic/do2.png'},
    {'name': 'pic/do3.png', 'path': 'pic/do3.png'},
    {'name': 'pic/do4.png', 'path': 'pic/do4.png'},
    {'name': 'pic/intro2.png', 'path': 'pic/intro2.png'},
    {'name': 'IAT_block34.xlsx', 'path': 'IAT_block34.xlsx'},
    {'name': 'pic/intro3.png', 'path': 'pic/intro3.png'},
    {'name': 'pic/intro4.png', 'path': 'pic/intro4.png'},
    {'name': 'IAT_block5.xlsx', 'path': 'IAT_block5.xlsx'},
    {'name': 'pic/intro5.png', 'path': 'pic/intro5.png'},
    {'name': 'IAT_block67.xlsx', 'path': 'IAT_block67.xlsx'},
    {'name': 'pic/intro6.png', 'path': 'pic/intro6.png'},
    {'name': 'pic/intro7.png', 'path': 'pic/intro7.png'},
    {'name': 'IAT_block8.xlsx', 'path': 'IAT_block8.xlsx'},
    {'name': 'pic/avoid1.png', 'path': 'pic/avoid1.png'},
    {'name': 'pic/avoid2.png', 'path': 'pic/avoid2.png'},
    {'name': 'pic/avoid3.png', 'path': 'pic/avoid3.png'},
    {'name': 'pic/avoid4.png', 'path': 'pic/avoid4.png'},
    {'name': 'pic/intro8.png', 'path': 'pic/intro8.png'},
    {'name': 'IAT_block910.xlsx', 'path': 'IAT_block910.xlsx'},
    {'name': 'pic/intro9.png', 'path': 'pic/intro9.png'},
    {'name': 'pic/intro10.png', 'path': 'pic/intro10.png'},
    {'name': 'IAT_block11.xlsx', 'path': 'IAT_block11.xlsx'},
    {'name': 'pic/intro11.png', 'path': 'pic/intro11.png'},
    {'name': 'IAT_block1213.xlsx', 'path': 'IAT_block1213.xlsx'},
    {'name': 'pic/intro12.png', 'path': 'pic/intro12.png'},
    {'name': 'pic/intro13.png', 'path': 'pic/intro13.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var preBlockInstrClock;
var preBlockInstrKey;
var intropic;
var trailClock;
var stim;
var key_resp;
var polygon;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "preBlockInstr"
  preBlockInstrClock = new util.Clock();
  preBlockInstrKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  intropic = new visual.ImageStim({
    win : psychoJS.window,
    name : 'intropic', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1, 0.75],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "trail"
  trailClock = new util.Clock();
  stim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([1.0, (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'IAT_block_loop1.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(preBlockInstrRoutineBegin(snapshot));
      trials_2LoopScheduler.add(preBlockInstrRoutineEachFrame());
      trials_2LoopScheduler.add(preBlockInstrRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      trials_2LoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      trials_2LoopScheduler.add(trialsLoopScheduler);
      trials_2LoopScheduler.add(trialsLoopEnd);
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: reps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: block_loop,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trailRoutineBegin(snapshot));
      trialsLoopScheduler.add(trailRoutineEachFrame());
      trialsLoopScheduler.add(trailRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var preBlockInstrMaxDurationReached;
var _preBlockInstrKey_allKeys;
var preBlockInstrMaxDuration;
var preBlockInstrComponents;
function preBlockInstrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'preBlockInstr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    preBlockInstrClock.reset();
    routineTimer.reset();
    preBlockInstrMaxDurationReached = false;
    // update component parameters for each repeat
    preBlockInstrKey.keys = undefined;
    preBlockInstrKey.rt = undefined;
    _preBlockInstrKey_allKeys = [];
    intropic.setImage(introPic);
    psychoJS.experiment.addData('preBlockInstr.started', globalClock.getTime());
    preBlockInstrMaxDuration = null
    // keep track of which components have finished
    preBlockInstrComponents = [];
    preBlockInstrComponents.push(preBlockInstrKey);
    preBlockInstrComponents.push(intropic);
    
    for (const thisComponent of preBlockInstrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function preBlockInstrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'preBlockInstr' ---
    // get current time
    t = preBlockInstrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *preBlockInstrKey* updates
    if (t >= 3 && preBlockInstrKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      preBlockInstrKey.tStart = t;  // (not accounting for frame time here)
      preBlockInstrKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { preBlockInstrKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { preBlockInstrKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { preBlockInstrKey.clearEvents(); });
    }
    
    // if preBlockInstrKey is active this frame...
    if (preBlockInstrKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = preBlockInstrKey.getKeys({keyList: 'space', waitRelease: false});
      _preBlockInstrKey_allKeys = _preBlockInstrKey_allKeys.concat(theseKeys);
      if (_preBlockInstrKey_allKeys.length > 0) {
        preBlockInstrKey.keys = _preBlockInstrKey_allKeys[_preBlockInstrKey_allKeys.length - 1].name;  // just the last key pressed
        preBlockInstrKey.rt = _preBlockInstrKey_allKeys[_preBlockInstrKey_allKeys.length - 1].rt;
        preBlockInstrKey.duration = _preBlockInstrKey_allKeys[_preBlockInstrKey_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *intropic* updates
    if (t >= 0.0 && intropic.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intropic.tStart = t;  // (not accounting for frame time here)
      intropic.frameNStart = frameN;  // exact frame index
      
      intropic.setAutoDraw(true);
    }
    
    
    // if intropic is active this frame...
    if (intropic.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of preBlockInstrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function preBlockInstrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'preBlockInstr' ---
    for (const thisComponent of preBlockInstrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('preBlockInstr.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(preBlockInstrKey.corr, level);
    }
    psychoJS.experiment.addData('preBlockInstrKey.keys', preBlockInstrKey.keys);
    if (typeof preBlockInstrKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('preBlockInstrKey.rt', preBlockInstrKey.rt);
        psychoJS.experiment.addData('preBlockInstrKey.duration', preBlockInstrKey.duration);
        routineTimer.reset();
        }
    
    preBlockInstrKey.stop();
    // the Routine "preBlockInstr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trailMaxDurationReached;
var _key_resp_allKeys;
var trailMaxDuration;
var trailComponents;
function trailRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trail' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trailClock.reset();
    routineTimer.reset();
    trailMaxDurationReached = false;
    // update component parameters for each repeat
    stim.setSize([w, h]);
    stim.setImage(stims);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('trail.started', globalClock.getTime());
    trailMaxDuration = null
    // keep track of which components have finished
    trailComponents = [];
    trailComponents.push(stim);
    trailComponents.push(key_resp);
    trailComponents.push(polygon);
    
    for (const thisComponent of trailComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trailRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trail' ---
    // get current time
    t = trailClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim* updates
    if (t >= 1 && stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim.tStart = t;  // (not accounting for frame time here)
      stim.frameNStart = frameN;  // exact frame index
      
      stim.setAutoDraw(true);
    }
    
    
    // if stim is active this frame...
    if (stim.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 1 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['e','i'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp.keys == correct_key) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }
    
    
    // if polygon is active this frame...
    if (polygon.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      polygon.tStop = t;  // not accounting for scr refresh
      polygon.frameNStop = frameN;  // exact frame index
      // update status
      polygon.status = PsychoJS.Status.FINISHED;
      polygon.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trailComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trailRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trail' ---
    for (const thisComponent of trailComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trail.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(correct_key)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "trail" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
