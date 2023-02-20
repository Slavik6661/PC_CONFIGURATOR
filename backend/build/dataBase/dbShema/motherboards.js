"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var motherboard = new mongoose_1.Schema({
    model: { type: String, unique: true },
    manufacturer_company: String,
    form_factor: String,
    height: String,
    width: String,
    socket: String,
    chipset: String,
    compatible_cores: String,
    number_of_memory_slots: String,
    supported_memory_form_factor: String,
    supported_memory_type: String,
    number_of_memory_channels: String,
    maximum_memory: String,
    maximum_memory_frequency: String,
    ram_frequency_in_overclocking: String,
    number_of_m2_connectors: String,
    m2_connectors: String,
    number_of_sata_ports: String,
    sata_raid_operation_mode: String,
    nvme_support: String,
    number_of_pci_e_x16_slots: String,
    main_power_connector: String,
    cpu_power_connector: String,
    number_of_power_phases: String,
});
exports.default = (0, mongoose_1.model)('motherboard', motherboard);
