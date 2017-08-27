# Game Engine Archetecture

## Data Object

* Stores raw information.
* Is flat: relationships are done with Ids, not references.
* No methods for game logic.
* Can be easily (de)serialized and transmitted to/from the back end.

## Data Store

* 

## Game Object

*


# Structure

* database: used to request data objects.
  getWorld
  worlds
  rooms
  e
  store

* adventure
  * state
    * explorer
    * room
    * user (maybe?)
  * actions
    * describeRoom -> output room description
    * listDoors -> output door numbers
    * pickDoor(doorNumber) ->
      door = room.getDoorByNumber(doorNumber)
      goThroughDoor(door)
    * goThroughDoor(door) ->
      nextRoom = door.destination
      state.changeRoom(doo)

