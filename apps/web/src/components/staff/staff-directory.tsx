"use client";

import { useMemo, useState } from "react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import { StaffGrid } from "./staff-grid";
import { Staff } from "@/types/staff";

interface StaffDirectoryProps {
  staff: Staff[];
}

export function StaffDirectory({ staff }: StaffDirectoryProps) {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("all");
  const [unit, setUnit] = useState("all");

  const departments = useMemo(() => {
    const values = staff.map(member => member.department?.name).filter(Boolean);

    return [...new Set(values)];
  }, [staff]);

  const filteredStaff = useMemo(() => {
    return staff.filter(member => {
      const fullName = `${member.first_name} ${member.last_name}`.toLowerCase();

      const matchesSearch =
        fullName.includes(search.toLowerCase()) ||
        member.job_title?.toLowerCase().includes(search.toLowerCase()) ||
        member.email?.toLowerCase().includes(search.toLowerCase());

      const matchesDepartment =
        department === "all" || member.department?.name === department;

      const matchesUnit = unit === "all" || member.unit === unit;

      return matchesSearch && matchesDepartment && matchesUnit;
    });
  }, [staff, search, department, unit]);

  const clearFilters = () => {
    setSearch("");
    setDepartment("all");
    setUnit("all");
  };

  const units = useMemo(() => {
    return [
      ...new Set(
        staff
          .map(member => member.unit)
          .filter((unit): unit is string => typeof unit === "string"),
      ),
    ];
  }, [staff]);

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div
        className="
          rounded-lg
          border
          bg-card
          p-6
          space-y-4
        "
      >
        <div
          className="
            grid
            gap-4
            md:grid-cols-4
          "
        >
          <Input
            placeholder="Search staff..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="md:col-span-2"
          />

          <Select value={department} onValueChange={setDepartment}>
            <SelectTrigger>
              <SelectValue placeholder="Department" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>

              {departments.map(dept => (
                <SelectItem key={dept} value={dept}>
                  {dept}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={unit} onValueChange={setUnit}>
            <SelectTrigger>
              <SelectValue placeholder="Unit" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">All Units</SelectItem>

              {units.map(item => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {filteredStaff.length} of {staff.length} staff members
          </p>

          <Button variant="outline" onClick={clearFilters}>
            Clear Filters
          </Button>
        </div>
      </div>

      {/* Results */}
      {filteredStaff.length > 0 ? (
        <StaffGrid staff={filteredStaff} />
      ) : (
        <div
          className="
            rounded-lg
            border
            bg-card
            p-12
            text-center
          "
        >
          <h3 className="text-lg font-semibold">No staff found</h3>

          <p className="mt-2 text-muted-foreground">
            Try adjusting your search or filters.
          </p>

          <Button variant="outline" className="mt-4" onClick={clearFilters}>
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}
