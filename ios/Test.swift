//
//  Test.swift
//  ReactDocViewerExample
//
//  Created by Ram on 11/27/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation
import RxBluetoothKit
import CoreBluetooth

@objc(DAtAnchorBLEManager)
public class DAtAnchorBLEManager: NSObject, CBPeripheralManagerDelegate {
  
  enum Error: Swift.Error {
    case peripheralAlreadyOn
    case peripheralAlreadyOff
  }
  
  private(set) var peripheralManager: CBPeripheralManager!
  
  public func peripheralManagerDidUpdateState(_ peripheral: CBPeripheralManager)
  {
    print("state: \(peripheral.state)")
  }
  
  
  func peripheralManagerDidStartAdvertising(peripheral: CBPeripheralManager, error: NSError?)
  {
    if let error = error {
      print("Failed… error: \(error)")
      return
    }
    print("Advertising Succeeded!")
  }

  
  @objc
  func startBLEServer(_ callback: RCTResponseSenderBlock) {
    print("in BLE Server START")
    
    if peripheralManager != nil { print("error: \(Error.peripheralAlreadyOn)") }
    peripheralManager = CBPeripheralManager(delegate: self, queue: .main)
    
    let serviceUUID = CBUUID(string: "0000FFF0-0000-1000-8000-00805F9B34FB")
    let service = CBMutableService(type: serviceUUID, primary: true)
    let advertisementData = [CBAdvertisementDataLocalNameKey: "DAtAnchor BLE"]
    let characteristicUUID = CBUUID(string: "0000FFF3-0000-1000-8000-00805F9B34FB")
    let properties: CBCharacteristicProperties = [.notify, .read, .write]
    let permissions: CBAttributePermissions = [.readable, .writeable]
    let characteristic = CBMutableCharacteristic(
      type: characteristicUUID,
      properties: properties,
      value: nil,
      permissions: permissions)
    
    service.characteristics = [characteristic]
    
    peripheralManager.add(service)
    peripheralManager.startAdvertising(advertisementData)
    
//    let disposable = peripheralManager.observeState
//      .startWith(self.peripheralManager.state)
//      .filter { $0 == .poweredOn }
//      .take(1)
//      .flatMap { self.peripheralManager.add(service) }
//      .flatMap { self.peripheralManager.startAdvertising(advertisementData) }
    
    callback([3232])

  }
  
  

  
  
  func peripheralManager(peripheral: CBPeripheralManager, didAddService service: CBService, error: NSError?)
  {
    if let error = error {
      print("error: \(error)")
      return
    }
    
    print("service: \(service)")
  }
  
  
  
  @objc
  func stopBLEServer(_ callback: RCTResponseSenderBlock) {
    print("in BLE Server STOP")
    
      if peripheralManager == nil || peripheralManager.state != .poweredOn {
        print("error: \(Error.peripheralAlreadyOff)")
      }
      peripheralManager.stopAdvertising()
      peripheralManager = nil
    
    
    
    callback([3233])
  }
  
  
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}



//let disposable = centralManager.observeState
//  .startWith(centralManager.state)
//  .filter { $0 == .poweredOn }
//  .take(1)
//  .flatMap { centralManager.add(myService) }
//  .flatMap { centralManager.startAdvertising(myAdvertisementData) }
