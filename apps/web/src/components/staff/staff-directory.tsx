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
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import { Building2, Search, Users, X } from "lucide-react";

import { Staff } from "@/types/staff";

import { StaffGrid } from "./staff-grid";

interface StaffDirectoryProps {
  staff: Staff[];

  showDepartmentFilter?: boolean;
  showUnitFilter?: boolean;
}

export function StaffDirectory({
  staff,
  showDepartmentFilter = true,
  showUnitFilter = true,
}: StaffDirectoryProps) {
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const [department, setDepartment] = useState("all");

  const [unit, setUnit] = useState("all");

  const normalizedSearch = search.trim().toLowerCase();

  const departments = useMemo(() => {
    const values = staff.map(member => member.department?.name).filter(Boolean);

    return [...new Set(values)];
  }, [staff]);

  const units = useMemo(() => {
    return [
      ...new Set(
        staff
          .map(member => member.unit)
          .filter((unit): unit is string => typeof unit === "string"),
      ),
    ];
  }, [staff]);

  const filteredStaff = useMemo(() => {
    return staff.filter(member => {
      const fullName = `${member.first_name} ${member.last_name}`.toLowerCase();

      const matchesSearch =
        normalizedSearch === "" ||
        fullName.includes(normalizedSearch) ||
        member.job_title?.toLowerCase().includes(normalizedSearch) ||
        member.email?.toLowerCase().includes(normalizedSearch);

      const matchesDepartment =
        !showDepartmentFilter ||
        department === "all" ||
        member.department?.name === department;

      const matchesUnit =
        !showUnitFilter || unit === "all" || member.unit === unit;

      return matchesSearch && matchesDepartment && matchesUnit;
    });
  }, [
    staff,
    normalizedSearch,
    department,
    unit,
    showDepartmentFilter,
    showUnitFilter,
  ]);

  const clearFilters = () => {
    setSearch("");
    setSearchInput("");

    if (showDepartmentFilter) {
      setDepartment("all");
    }

    if (showUnitFilter) {
      setUnit("all");
    }
  };

  const activeFilterCount = [
    search && "search",

    showDepartmentFilter && department !== "all" && "department",

    showUnitFilter && unit !== "all" && "unit",
  ].filter(Boolean).length;

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="space-y-6 p-6">
          <div className="grid gap-4 lg:grid-cols-12">
            {/* Search */}

            <div
              className={
                showDepartmentFilter ? "lg:col-span-6" : "lg:col-span-8"
              }
            >
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search
                    className="
                      absolute
                      left-3
                      top-1/2
                      h-4
                      w-4
                      -translate-y-1/2
                      text-muted-foreground
                    "
                  />

                  <Input
                    placeholder="Search by name, title or email..."
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === "Enter") {
                        setSearch(searchInput);
                      }
                    }}
                    className="pl-10"
                  />
                </div>

                <Button onClick={() => setSearch(searchInput)}>
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>

            {/* Department */}

            {showDepartmentFilter && (
              <div className="lg:col-span-3">
                <Select value={department} onValueChange={setDepartment}>
                  <SelectTrigger>
                    <Building2 className="mr-2 h-4 w-4" />

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
              </div>
            )}

            {/* Unit */}

            {showUnitFilter && (
              <div
                className={
                  showDepartmentFilter ? "lg:col-span-3" : "lg:col-span-4"
                }
              >
                <Select value={unit} onValueChange={setUnit}>
                  <SelectTrigger>
                    <Users className="mr-2 h-4 w-4" />

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
            )}
          </div>

          {/* Active Filters */}

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              {search && (
                <Badge variant="secondary" className="gap-1 pr-1">
                  Search: {search}
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setSearchInput("");
                    }}
                    className="rounded-full p-0.5 hover:bg-background"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}

              {showDepartmentFilter && department !== "all" && (
                <Badge variant="secondary" className="gap-1 pr-1">
                  {department}

                  <button
                    type="button"
                    onClick={() => setDepartment("all")}
                    className="rounded-full p-0.5 hover:bg-background"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}

              {showUnitFilter && unit !== "all" && (
                <Badge variant="secondary" className="gap-1 pr-1">
                  {unit}

                  <button
                    type="button"
                    onClick={() => setUnit("all")}
                    className="rounded-full p-0.5 hover:bg-background"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
            </div>

            {/* Results Summary */}

            <div
              className="
                flex
                flex-col
                gap-4
                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline">
                  {activeFilterCount} active filters
                </Badge>

                <Badge variant="secondary">{filteredStaff.length}</Badge>

                <span className="text-sm text-muted-foreground">
                  of {staff.length} staff members
                </span>
              </div>

              <Button variant="outline" onClick={clearFilters}>
                <X className="mr-2 h-4 w-4" />
                Clear All Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}

      {filteredStaff.length > 0 ? (
        <StaffGrid staff={filteredStaff} />
      ) : (
        <Card>
          <CardContent className="p-12 text-center">
            <Users className="mx-auto h-10 w-10 text-muted-foreground" />

            <h3 className="mt-4 text-lg font-semibold">No staff found</h3>

            <p className="mt-2 text-muted-foreground">
              Try adjusting your search criteria.
            </p>

            <Button variant="outline" className="mt-6" onClick={clearFilters}>
              Reset Filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
